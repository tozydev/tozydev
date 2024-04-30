import { ui } from "./consts"
import type { Link, Site, Social } from "@types"

// Site
export const SITE = {
  url: "https://nguyenthanhtan.id.vn",
  name: "Tozydev",
  description: `Chào mừng bạn đến với blog cá nhân của Thanh Tân, "Let's dream and do it!".`,
  author: "tozydev",
} satisfies Site

// Links
export const LINKS: Link[] = [
  {
    text: ui["nav.home"],
    href: "/",
  },
  {
    text: ui["nav.about"],
    href: "/about",
  },
  {
    text: `${ui["nav.blog"]} (Coming soon)`,
    href: "/blog",
  },
] as const

// Socials
export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    icon: "github",
    text: "tozydev",
    href: "https://nguyenthanhtan.id.vn/gh",
  },
  {
    name: "Facebook",
    icon: "facebook",
    text: "tozydev",
    href: "https://nguyenthanhtan.id.vn/fb",
  },
  {
    name: "Youtube",
    icon: "youtube",
    text: "tozydev",
    href: "https://nguyenthanhtan.id.vn/yt",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    text: "tozydev",
    href: "https://nguyenthanhtan.id.vn/in",
  },
  {
    name: "Email",
    icon: "at",
    text: "contact@nguyenthanhtan.id.vn",
    href: "mailto:contact@nguyenthanhtan.id.vn",
  },
] as const
