import { getCollection, type CollectionEntry } from "astro:content"

export type Options = {
  sortBy: "pub-date" | "mod-date"
  limit: number
}

function compareByDate(a: CollectionEntry<"blog">, b: CollectionEntry<"blog">, sortBy: Options["sortBy"]) {
  if (sortBy === "pub-date") {
    return b.data.pubDate.getTime() - a.data.pubDate.getTime()
  }

  return (b.data.modDate || b.data.pubDate).getTime() - (a.data.modDate || a.data.pubDate).getTime()
}

export async function getBlogPosts({ sortBy, limit }: Partial<Options> = {}) {
  return getCollection<"blog">("blog", (post) => !post.data.draft).then((posts) => {
    const sorted = posts.toSorted((a, b) => compareByDate(a, b, sortBy || "mod-date"))
    return (limit || 0) > 0 ? sorted.slice(0, limit) : sorted
  })
}
