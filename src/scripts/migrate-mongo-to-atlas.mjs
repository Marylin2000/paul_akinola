import fs from "node:fs";
import path from "node:path";
import { MongoClient } from "mongodb";

const root = process.cwd();

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;

    const [, key, rawValue] = match;
    if (process.env[key] !== undefined) continue;

    let value = rawValue.trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
}

function redactMongoUri(uri) {
  const parsed = new URL(uri);
  return `${parsed.protocol}//${parsed.hostname}${parsed.pathname}`;
}

function parseArgs() {
  return {
    dropTarget: process.argv.includes("--drop-target"),
    dryRun: process.argv.includes("--dry-run"),
  };
}

function getDbName(uri) {
  const parsed = new URL(uri);
  const dbName = parsed.pathname.replace(/^\//, "");

  if (!dbName) {
    throw new Error(`Mongo URI must include a database name: ${redactMongoUri(uri)}`);
  }

  return dbName;
}

async function copyIndexes(sourceCollection, targetCollection) {
  const indexes = await sourceCollection.indexes();

  for (const index of indexes) {
    if (index.name === "_id_") continue;

    const { key, name, v, ns, ...options } = index;
    await targetCollection.createIndex(key, { ...options, name });
  }
}

async function copyCollection(sourceDb, targetDb, collectionInfo, options) {
  const sourceCollection = sourceDb.collection(collectionInfo.name);
  const targetCollection = targetDb.collection(collectionInfo.name);
  const count = await sourceCollection.countDocuments();

  console.log(`Copying ${collectionInfo.name}: ${count} documents`);

  if (options.dryRun) return;

  if (options.dropTarget) {
    const exists = await targetDb.listCollections({ name: collectionInfo.name }).hasNext();
    if (exists) {
      await targetCollection.drop();
    }
  }

  const exists = await targetDb.listCollections({ name: collectionInfo.name }).hasNext();
  if (!exists) {
    const collectionOptions = collectionInfo.options || {};
    await targetDb.createCollection(collectionInfo.name, collectionOptions);
  }

  const cursor = sourceCollection.find({}, { noCursorTimeout: true }).batchSize(250);
  const batch = [];

  for await (const doc of cursor) {
    batch.push({
      replaceOne: {
        filter: { _id: doc._id },
        replacement: doc,
        upsert: true,
      },
    });

    if (batch.length === 250) {
      await targetCollection.bulkWrite(batch, { ordered: false });
      batch.length = 0;
    }
  }

  if (batch.length > 0) {
    await targetCollection.bulkWrite(batch, { ordered: false });
  }

  await copyIndexes(sourceCollection, targetCollection);
}

async function main() {
  loadEnvFile(path.join(root, ".env"));
  loadEnvFile(path.join(root, ".env.local"));

  const options = parseArgs();
  const sourceUri = process.env.LOCAL_DATABASE_URL || process.env.DATABASE_URL;
  const targetUri = process.env.ATLAS_DATABASE_URL || process.env.TARGET_DATABASE_URL;

  if (!sourceUri) {
    throw new Error("Missing source URI. Set LOCAL_DATABASE_URL or DATABASE_URL.");
  }

  if (!targetUri) {
    throw new Error("Missing target URI. Set ATLAS_DATABASE_URL or TARGET_DATABASE_URL.");
  }

  const sourceDbName = getDbName(sourceUri);
  const targetDbName = getDbName(targetUri);

  if (sourceUri === targetUri) {
    throw new Error("Source and target Mongo URIs are identical.");
  }

  console.log(`Source: ${redactMongoUri(sourceUri)}`);
  console.log(`Target: ${redactMongoUri(targetUri)}`);

  if (options.dryRun) {
    console.log("Dry run enabled. No target data will be changed.");
  } else if (options.dropTarget) {
    console.log("Drop target enabled. Matching target collections will be dropped first.");
  } else {
    console.log("Upsert mode enabled. Existing target documents with matching _id values will be replaced.");
  }

  const sourceClient = new MongoClient(sourceUri);
  const targetClient = new MongoClient(targetUri);

  await sourceClient.connect();
  await targetClient.connect();

  try {
    const sourceDb = sourceClient.db(sourceDbName);
    const targetDb = targetClient.db(targetDbName);
    const collections = await sourceDb.listCollections({}, { nameOnly: false }).toArray();

    for (const collectionInfo of collections) {
      await copyCollection(sourceDb, targetDb, collectionInfo, options);
    }

    console.log(`Migration complete. ${collections.length} collections processed.`);
  } finally {
    await sourceClient.close();
    await targetClient.close();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
