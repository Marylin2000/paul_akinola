import { getPayload } from "payload";
import configPromise from "../payload.config";
import { buildDefault } from "../lib/defaults-cms";

async function seed() {
  const payload = await getPayload({ config: configPromise });

  try {
    await (payload.updateGlobal as any)({
      slug: "build",
      // Keep seed content in one place so the frontend fallback and CMS starter data cannot drift.
      data: buildDefault,
    });
    console.log("Successfully seeded Build global!");
  } catch (error) {
    console.error("Error seeding Build global:", error);
  }

  process.exit(0);
}

seed();
