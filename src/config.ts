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
    href: "https://github.com/tozydev",
  },
  {
    name: "Facebook",
    icon: "facebook",
    text: "tozydev",
    href: "https://www.facebook.com/tozydev",
  },
  {
    name: "Youtube",
    icon: "youtube",
    text: "tozydev",
    href: "https://www.youtube.com/@tozydev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    text: "tozydev",
    href: "https://www.linkedin.com/in/tozydev",
  },
  {
    name: "Email",
    icon: "at",
    text: "contact@nguyenthanhtan.id.vn",
    href: "mailto:contact@nguyenthanhtan.id.vn",
  },
] as const
