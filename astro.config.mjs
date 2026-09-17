import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://finaxis-meia.github.io",
  base: "/BLOG",
  markdown: { shikiConfig: { theme: "github-dark" } }
});
