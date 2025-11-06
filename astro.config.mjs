import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://vishalkapur.com",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: { light: "github-light", dark: "github-dark" },
    },
  },
  adapter: vercel(),
});
