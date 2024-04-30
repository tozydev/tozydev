import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import { SITE } from "./src/config"

// https://astro.build/config
export default defineConfig({
  site: SITE.url.toString(),
  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
