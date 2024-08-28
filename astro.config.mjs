import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://farfetchdev.web.app",
  output: "static",
  integrations: [tailwind(), mdx()]
});