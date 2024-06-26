import { formatDate } from "@lib/date"
import type { CollectionEntry } from "astro:content"

type Props = {
  entry: CollectionEntry<"blog">
}

export default function ArrowCard({ entry }: Props) {
  return (
    <a
      href={`/${entry.collection}/${entry.slug}`}
      class="group flex items-center gap-3 rounded-lg border border-black/15 p-4 shadow-md transition-colors 
      duration-300 ease-in-out hover:bg-black/5 dark:border-white/20 dark:shadow-none hover:dark:bg-white/10"
    >
      <div class="blend w-full group-hover:text-black group-hover:dark:text-white">
        <div class="text-2xl font-semibold text-black dark:text-white">{entry.data.title}</div>
        <div class="mt-2 line-clamp-2">{entry.data.summary}</div>
        <div class="mt-4 text-xs font-light">{formatDate(entry.data.modDate || entry.data.pubDate)}</div>
        <ul class="mt-2 flex flex-wrap gap-1">
          {entry.data.tags.map((tag: string) => (
            <li class="rounded bg-black/5 px-1 py-0.5 text-xs uppercase text-black/75 dark:bg-white/20 dark:text-white/75">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"
      >
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"
        />
        <polyline
          points="12 5 19 12 12 19"
          class="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"
        />
      </svg>
    </a>
  )
}
