import type { Projects } from "@/types/projects.type"
import { TAGS as TG } from "@/data/tags-project"

export const projects: Projects = [
    {
        name: "izimport.com",
        slug: "izimport-com",
        type: "web",
        isActive: true,
        description:
            "📦 Seguimiento de envios internacionales por DHL y cotización de importaciones ",
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
        images: ["/images/izimport.png", "/images/izimport_cotiza.webp"],
        icon: "Izimport",
    },

    {
        name: "importa Facil",
        slug: "importa-facil",
        type: "mobile",
        isActive: true,
        description:
            "✈️ Seguimiento de envios internacionales por DHL y cotización de importaciones",
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
            "🎬 Generador de resumenes para videos de youtube con inteligencia artificial",
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
            "📶Data warehouse para la gestión y uso de recursos públicos.",
        highlights: [TG.BUSINESSINTELLIGENCE, TG.POWERBI, TG.ETL],
        url: "https://github.com/ivanmayta",
        github: "https://github.com/ivanmayta",
        images: ["/images/dashboard.webp", "/images/dashboard2.webp "],
        icon: "Perú Compras",
    },
]
