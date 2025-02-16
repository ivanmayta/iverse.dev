import { Marquee3D } from "@/components/Marquee3D"
import { projects } from "@/data/projects"
import { Commant } from "@/icons/command"
import Link from "next/link"

export default function IndividualProjects({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = params
    const project = projects.find((p) => p.slug === slug)
    const { highlights } = project

    return (
        <main className="flex flex-col pt-12 w-full max-w-2xl mx-auto gap-6 min-w-[320px] ">
            <div className="text-start  space-y-6">
                <h1 className="text-6xl font-bold">{project.name}</h1>
                <h2>{project.description}</h2>
            </div>
            <Marquee3D images={project.images} />
            <div className=" flex flex-wrap gap-x-4 gap-2 items-start justify-start max-w-sm pb-6">
                {highlights &&
                    highlights.map((highlight) => {
                        const { name, icon: Icon } = highlight
                        return (
                            <div
                                key={name}
                                className="flex  items-center justify-center"
                            >
                                <Icon className="mr-1 text-zinc-800 dark:text-zinc-100  h-4 w-4" />
                                <span className="text-zinc-800 dark:text-zinc-100  text-sm">
                                    {name}
                                </span>
                            </div>
                        )
                    })}
            </div>
            <Link
                className="text-teal-500 flex items-center pb-6 font-semibold underline underline-offset-2"
                href="/"
            >
                <Commant className=" stroke-current group-hover:scale-110 transition-transform" />
                cd . .
            </Link>
        </main>
    )
}
