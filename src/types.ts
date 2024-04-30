export type Page = {
  title: string
  description?: string
}

export type Site = {
  url: string | URL
  name: string
  description: string
  author: string
}

export type Link = {
  text: string
  href: string
}

export type Social = {
  name: string
  icon: string
  text: string
  href: string
}
