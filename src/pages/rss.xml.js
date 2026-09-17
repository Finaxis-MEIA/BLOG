import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../data/site";

export async function GET(context) {
  const updates = (await getCollection("updates")).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: `${site.name} updates`,
    description: site.description,
    site: context.site,
    items: updates.map((entry) => ({ title: entry.data.title, description: entry.data.summary, pubDate: entry.data.date, link: `/updates/${entry.id}/` }))
  });
}
