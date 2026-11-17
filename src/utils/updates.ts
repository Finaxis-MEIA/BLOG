import type { CollectionEntry } from "astro:content";
export const readingMinutes = (entry: CollectionEntry<"updates">) => Math.max(1, Math.round((entry.body ?? "").split(/\s+/).filter(Boolean).length / 220));
