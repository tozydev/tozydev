import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For } from "solid-js"
import ArrowCard from "@components/ArrowCard"
import { cn } from "@lib/utils"
import { ui } from "@consts"

type Props = {
  tags: string[]
  data: CollectionEntry<"blog">[]
}

export default function Blog({ data, tags }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>())
  const [posts, setPosts] = createSignal<CollectionEntry<"blog">[]>([])

  createEffect(() => {
    setPosts(
      data.filter((entry) =>
        Array.from(filter()).every((value) =>
          entry.data.tags.some((tag: string) => tag.toLowerCase() === String(value).toLowerCase())
        )
      )
    )
  })

  function toggleTag(tag: string) {
    setFilter((prev) => new Set(prev.has(tag) ? [...prev].filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div class="col-span-3 sm:col-span-1">
        <div class="sticky top-24">
          <div class="mb-2 font-semibold  text-black dark:text-white">{ui.filter}</div>
          <ul class="flex flex-wrap gap-1.5 sm:flex-col">
            <For each={tags}>
              {(tag) => (
                <li>
                  <button
                    onClick={() => toggleTag(tag)}
                    class={cn(
                      "w-full rounded px-2 py-1",
                      "overflow-hidden overflow-ellipsis whitespace-nowrap",
                      "flex items-center gap-2",
                      // "bg-black/5 dark:bg-white/10",
                      "hover:bg-black/10 hover:dark:bg-white/15",
                      "transition-colors duration-300 ease-in-out",
                      filter().has(tag) && "text-black dark:text-white"
                    )}
                  >
                    <svg
                      class={cn(
                        "size-5 fill-black/50 dark:fill-white/50",
                        "transition-colors duration-300 ease-in-out",
                        filter().has(tag) && "fill-black dark:fill-white"
                      )}
                    >
                      <use href={`/ui.svg#square`} class={cn(!filter().has(tag) ? "block" : "hidden")} />
                      <use href={`/ui.svg#square-check`} class={cn(filter().has(tag) ? "block" : "hidden")} />
                    </svg>
                    {tag}
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      <div class="col-span-3 sm:col-span-2">
        <div class="flex flex-col">
          <div class="mb-2 text-sm">
            {ui["posts.display"]
              .replace("{count}", posts().length.toString())
              .replace("{total}", data.length.toString())}
          </div>
          <ul class="flex flex-col gap-3">
            {posts().map((post) => (
              <li>
                <ArrowCard entry={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
