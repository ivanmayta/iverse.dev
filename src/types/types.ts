export type Project = {
    name: string
    slug: string
    type: "web" | "mobile" | "bi" | "videogame"
    isActive: boolean
    description: string
    stack: string[]
    url: string
    github: string
    images: string[]
    icon: string
}
