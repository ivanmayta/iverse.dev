import type { LucideIcon } from "lucide-react"
import React from "react"
export type Projects = Project[]
export type Project = {
    name: string
    slug: string
    type: "web" | "bi" | "mobile"
    isActive: boolean
    description: string
    highlights: Highlight[]
    url: string
    github: string
    images: string[]
    icon: string
}

type Highlight = {
    name: string
    icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>
}
