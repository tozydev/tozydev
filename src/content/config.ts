import { SITE } from "@config"
import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string().default(SITE.author),
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    modDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
})

export const collections = { blog }
