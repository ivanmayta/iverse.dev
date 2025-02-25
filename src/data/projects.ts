import type { Projects } from "@/types/projects.type"
import { TAGS as TG } from "@/data/tags-project"

export const projects: Projects = [
    {
        name: "izimport.com",
        slug: "izimport-com",
        type: "web",
        isActive: true,
        description:
            "📦 Tracking international shipments by DHL and import quotes",
        highlights: [
            TG.REACT,
            TG.NEXTJS,
            TG.TAILWIND,
            TG.DHL,
            TG.EXCHANGERATES,
            TG.SHADCN,
        ],
        url: "https://izimport.com",
        github: "https://github.com/izimport.com",
        images: [
            "/images/izimport-1.webp",
            "/images/izimport-2.webp",
            "/images/izimport-3.webp",
        ],
        icon: "Izimport",
    },

    {
        name: "importa Facil",
        slug: "importa-facil",
        type: "mobile",
        isActive: true,
        description:
            "✈️Tracking international shipments by DHL and import quotes",
        highlights: [
            TG.ANDROID,
            TG.DOWNLOADCLOUD,
            TG.DHL,
            TG.EXCHANGERATES,
            TG.KOTLIN,
        ],
        url: "https://play.google.com/store/apps/details?id=com.importa.facil",
        github: "https://github.com/ivanmayta",
        images: ["/images/100.webp", "/images/portada.webp"],
        icon: "Import Facil",
    },
    {
        name: "iSummarize",
        slug: "isummarize",
        type: "web",
        isActive: true,

        description:
            "🎬Summary generator for YouTube videos with artificial intelligence",
        highlights: [
            TG.NEXTJS,
            TG.REACT,
            TG.STRAPI,
            TG.GEMINI,
            TG.DIGITALOCEAN,
            TG.POSTGRESQL,
        ],
        url: "https://isummarize.vercel.app/",
        github: "https://github.com/ivanmayta/iSummarize-strapi",
        images: ["/images/isummarize.webp", "/images/isummarize2.webp"],
        icon: "iSummerize",
    },
    {
        name: "Perú Compras",
        slug: "peru-compras",
        type: "bi",
        isActive: true,
        description:
            "📶Data warehouse for the management and use of public resources.",
        highlights: [TG.BUSINESSINTELLIGENCE, TG.POWERBI, TG.ETL],
        url: "https://github.com/ivanmayta",
        github: "https://github.com/ivanmayta",
        images: ["/images/dashboard.webp", "/images/dashboard2.webp "],
        icon: "Perú Compras",
    },
]
