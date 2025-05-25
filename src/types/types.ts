import { LucideIcon } from "lucide-react"

export type Project = {
    name: string
    slug: string
    type: "web" | "mobile" | "bi" | "videogame"
    isActive: boolean
    description: string
    stack: Highlight[] | string[]
    url: string
    github: string
    images: string[]
    icon: string
    highlights: Highlight[]
}

type Highlight = {
    name: string
    icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>
}
