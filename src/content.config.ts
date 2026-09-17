import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const updates = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/updates" }),
  schema: z.object({
    title: z.string(),
    challenge: z.string(),
    week: z.number().int().positive(),
    date: z.coerce.date(),
    authors: z.array(z.string()),
    status: z.enum(["in-progress", "completed"]),
    summary: z.string()
  })
});

export const collections = { updates };
