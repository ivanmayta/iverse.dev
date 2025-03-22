import type { Projects } from "@/types/projects.type"
import { TAGS as TG } from "@/data/tags-project"

export const projects: Projects = [
    {
        name: "izimport.com",
        slug: "izimport-com",
        type: "web",
        isActive: true,
        description:
            "📦 E-commerce product catalog platform for B2B and B2C businesses.",

        highlights: [
            TG.NEXTJS,
            TG.SUPABASE,
            TG.REACT,
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
            TG.KOTLIN,
            TG.DOWNLOADCLOUD,
            TG.DHL,
            TG.EXCHANGERATES,
        ],
        url: "https://play.google.com/store/apps/details?id=com.importa.facil",
        github: "https://github.com/ivanmayta",
        images: ["/images/100.webp", "/images/portada.webp"],
        icon: "Import Facil",
    },
    {
        name: "ssomacal.com",
        slug: "ssomacal-pe",
        type: "web",
        isActive: true,
        description:
            "🦺 Landing page for the company of SECURITY, OCCUPATIONAL HEALTH, ENVIRONMENT AND QUALITY (ssomacal).",
        highlights: [TG.ASTRO, TG.TAILWIND],
        url: "https://ssomacal-pe.vercel.app/",
        github: "https://github.com/ivanmayta",
        images: ["/images/ssomacal-1.png", "/images/ssomacal-2.png"],
        icon: "Perú Compras",
    },
    {
        name: "probusiness.pe",
        slug: "probusiness-pe",
        type: "web",
        isActive: true,
        description: " 🚢 Landing page of the importing company Probusiness",
        highlights: [TG.ASTRO, TG.TAILWIND],
        url: "https://probusiness-pe.vercel.app/",
        github: "https://github.com/ivanmayta",
        images: [
            "/images/probusiness-1.png",
            "/images/probusiness-2.png",
            "/images/probusiness-3.png",
        ],
        icon: "Perú Compras",
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
    {
        name: "Up All",
        slug: "upp-all",
        type: "videogame",
        isActive: true,
        description:
            "🎮Videogame inspired by Only Up, where you jump and overcome obstacles.",
        highlights: [TG.UNITY, TG.CSHARP],
        url: "https://github.com/ivanmayta",
        github: "https://github.com/ivanmayta",
        images: ["/images/up-all-1.png"],
        icon: "Perú Compras",
    },
]
