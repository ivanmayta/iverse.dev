export function Technologies() {
    const techs = {
        frontend: [
            { badge: "Astro", logo: "Astro", logoColor: "" },
            { badge: "Next.js", logo: "next.js", logoColor: "" },
            { badge: "React", logo: "React", logoColor: "" },
            { badge: "Supabase", logo: "Supabase", logoColor: "" },
            { badge: "Tailwind", logo: "TailwindCss", logoColor: "" },
            { badge: "HTML", logo: "html5", logoColor: "" },
            { badge: "CSS", logo: "CSS3", logoColor: "1572B6" },
            { badge: "Bootstrap", logo: "Bootstrap", logoColor: "" },
        ],
        backend: [
            { badge: "Node.js", logo: "node.js", logoColor: "" },
            { badge: "Express", logo: "express", logoColor: "" },
            { badge: "Python", logo: "python", logoColor: "" },
            { badge: "Django", logo: "django", logoColor: "" },
            { badge: "Kotlin", logo: "kotlin", logoColor: "7F52FF" },
        ],
        database: [
            { badge: "PostgreSQL", logo: "postgresql", logoColor: "" },
            { badge: "MySQL", logo: "mysql", logoColor: "" },
            { badge: "Firebase", logo: "firebase", logoColor: "FFCA28" },
        ],
        cloud: [{ badge: "DigitalOcean", logo: "digitalocean", logoColor: "" }],
        tools: [
            { badge: "GitHub", logo: "github", logoColor: "white" },
            { badge: "Git", logo: "git", logoColor: "F05032" },
            { badge: "VSCode", logo: "visualstudiocode", logoColor: "007ACC" },
            { badge: "Vercel", logo: "vercel", logoColor: "white" },
            { badge: "Vite", logo: "vite", logoColor: "646CFF" },
            {
                badge: "Android Studio",
                logo: "androidstudio",
                logoColor: "3DDC84",
            },
        ],
    }
    return (
        <section>
            <RowTechs techs={techs.frontend} />
            <RowTechs techs={techs.backend} />
            <RowTechs techs={techs.database} />
            <RowTechs techs={techs.tools} />
            <RowTechs techs={techs.cloud} />
        </section>
    )
}
export const RowTechs = ({
    techs,
}: {
    techs: { badge: string; logo: string; logoColor: string }[]
}) => {
    return (
        <div className="flex justify-center gap-2 py-1">
            {techs.map((tech, index) => (
                <img
                    key={index}
                    src={`https://img.shields.io/badge/-${tech.badge}-000?&logo=${tech.logo}&logoColor=${tech.logoColor}`}
                    alt={tech.badge}
                />
            ))}
        </div>
    )
}
