import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://finaxis.example.com",
  markdown: { shikiConfig: { theme: "github-dark" } }
});
