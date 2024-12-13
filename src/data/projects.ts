import {
    Kotlin,
    Reactjs,
    Tailwind,
    ShadCn,
    Nextjs,
    PowerBi,
    AndroidEstudio,
} from "@/icons/tools"
import { DownloadCloud, Building2 } from "lucide-react"
import { ExchangeRates } from "@/icons/ExchangeRates"
import { Etl } from "@/icons/Etl"
import { Dhl } from "@/icons/dhl"

import type { Projects } from "@/types/projects.type"
export const projects: Projects = [
    {
        name: "izimport.com",
        type: "Web",
        isActive: true,
        description:
            "Plataforma web que facilita el seguimiento de envíos de DHL y la cotización de importaciones simplificadas en Perú",
        highlights: [
            {
                name: "Next.js",
                icon: Nextjs,
            },
            {
                name: "React",
                icon: Reactjs,
            },
            {
                name: "Shadcn",
                icon: ShadCn,
            },
            {
                name: "API DHL",
                icon: Dhl,
            },
            {
                name: "Tailwind",
                icon: Tailwind,
            },
        ],
        url: "https://izimport.com",
        github: "https://github.com/ivanmayta",
        images: ["/images/izimport.png", "/images/izimport_cotiza.webp"],
        icon: "Izimport",
    },

    {
        name: "importa Facil",
        type: "App Móvil",
        isActive: true,
        description:
            "Aplicación móvil que permite a los usuarios rastrear paquetes de DHL y cotizar importaciones simplificadas en Perú.",
        highlights: [
            {
                name: "+100 Descargas",
                icon: DownloadCloud,
            },
            {
                name: "Android Studio",
                icon: AndroidEstudio,
            },

            {
                name: "Kotlin",
                icon: Kotlin,
            },
            {
                name: "API DHL",
                icon: Dhl,
            },
            {
                name: "Api Exchange Rate",
                icon: ExchangeRates,
            },
        ],
        url: "https://play.google.com/store/apps/details?id=com.importa.facil",
        github: "https://github.com/ivanmayta",
        images: ["/images/100.webp", "/images/portada.webp"],
        icon: "Import Facil",
    },
    {
        name: "iSummarize",
        type: "Business Intelligence",
        isActive: true,

        description:
            "Data warehouse para optimizar la toma de decisiones informadas, aumentar la transparencia y mejorar la eficiencia en la gestión y uso de recursos públicos.",
        highlights: [
            {
                name: "Business Intelligence",
                icon: Building2,
            },

            {
                name: "Power BI",
                icon: PowerBi,
            },
            {
                name: "ETL",
                icon: Etl,
            },
        ],
        url: "https://isummarize.vercel.app/",
        github: "https://github.com/ivanmayta/iSummarize-strapi",
        images: ["/images/isummarize.webp", "/images/isummarize2.webp"],
        icon: "iSummerize",
    },
    {
        name: "Perú Compras",
        type: "Business Intelligence",
        isActive: true,
        description:
            "Data warehouse para optimizar la toma de decisiones informadas, aumentar la transparencia y mejorar la eficiencia en la gestión y uso de recursos públicos.",
        highlights: [
            {
                name: "Business Intelligence",
                icon: Building2,
            },

            {
                name: "Power BI",
                icon: PowerBi,
            },
            {
                name: "ETL",
                icon: Etl,
            },
        ],
        url: "https://github.com/ivanmayta",
        github: "https://github.com/ivanmayta",
        images: ["/images/dashboard.webp", "/images/dashboard2.webp "],
        icon: "Perú Compras",
    },
]
