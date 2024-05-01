import type { Page } from "@types"

export const pages: Record<string, Page> = {
  about: {
    title: "Giới thiệu",
    description: "Một chút về bản thân và blog của mình.",
  },
  blog: {
    title: "Blog",
    description: "Những bài viết về những chủ đề mình đam mê.",
  },
  search: {
    title: "Tìm kiếm",
    description: "Tìm kiếm các bài viết trên blog.",
  },
  "404": {
    title: "Không tìm thấy trang",
    description: "Trang bạn đang tìm kiếm không tồn tại.",
  },
} as const

export const ui = {
  "nav.home": "Trang chủ",
  "nav.about": "Giới thiệu",
  "nav.blog": "Blog",
  copyright: `<div>Copyright &copy; 2024 | Thanh Tân (tozydev)</div>
    <div>
      Giao diện được chỉnh sửa từ
      <a href="https://github.com/markhorn-dev/astro-sphere" class="text-green-700 dark:text-green-500" target="_blank">astro-sphere</a>
      bởi
      <a href="https://github.com/markhorn-dev" class="text-green-700 dark:text-green-500" target="_blank">Mark Horn</a>
    </div>`,
  back_to_top: "Lên đầu trang",
  filter: "Lọc",
  "posts.display": "Hiển thị {count} trên tổng số {total} bài viết",
  "search.placeholder": "Tìm kiếm...",
  "search.found": "Tìm thấy {count} kết quả cho '{query}'",
  return_home: "Trở về trang chủ",
  recent_posts: "Bài viết gần đây",
  all_posts: "Tất cả bài viết",
  "accessibility.back_to_top": "Trở lại đầu trang",
  "accessibility.search": `Tìm kiếm bài viết trên tozydev`,
  "accessibility.rss_feed": `Theo dõi RSS feed của tozydev`,
  "accessibility.change_theme": "Thay đổi chủ đề giao diện",
  "accessibility.toggle_navigation": "Mở/Đóng menu",
} as const
