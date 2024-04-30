import rss from "@astrojs/rss"
import { SITE } from "@config"
import { getBlogPosts } from "@lib/blog"

type Context = {
  site: string
}

export async function GET(context: Context) {
  const posts = await getBlogPosts({ sortBy: "pub-date" })

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: posts.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.pubDate,
      link: `/blog/${item.slug}/`,
    })),
  })
}
