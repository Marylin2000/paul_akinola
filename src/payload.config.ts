import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Articles } from "./collections/Articles";

import { Hero } from "./globals/Hero";
import { Offerings } from "./globals/Offerings";
import { Recognition } from "./globals/Recognition";
import { PersonalAnchor } from "./globals/PersonalAnchor";
import { About } from "./globals/About";
import { Work } from "./globals/Work";
import { InnerLife } from "./globals/InnerLife";
import { Build } from "./globals/Build";
import { Together } from "./globals/Together";
import { Thoughts } from "./globals/Thoughts";
import { Navigation } from "./globals/Navigation";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const adminComponents = {
  graphics: {
    Logo: "/components/admin/Logo#default",
    Icon: "/components/admin/Icon#default",
  },
  views: {
    Dashboard: "/components/admin/Dashboard#default",
  },
} as any;

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: adminComponents,
  },
  collections: [Users, Media, Articles],
  globals: [Hero, Offerings, Recognition, PersonalAnchor, About, Work, InnerLife, Build, Together, Thoughts, Navigation],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,
  plugins: [],
});
