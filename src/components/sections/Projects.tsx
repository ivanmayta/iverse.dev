import { ChartColumnBig, LinkIcon } from "lucide-react"
import { projects } from "@/data/projects"
import React from "react"
import { Project as TypeProject } from "@/types/projects.type"
import Link from "next/link"
import {space} from "@/fonts/fonts"
const Projects = () => {
    return (
        <section className="group/sub mx-auto max-w-2xl w-full ">
            <h2
                className={`flex group-hover/sub:text-[#9d4cfa] flex-row items-center pb-2 text-xl lg:leading-tight tracking-wide font-medium text-black dark:text-zinc-500  ${space.className}`}
            >
                / Projects
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 -mx-3.5  gap-y-2">
                {projects.map((project, key) => {
                    return <Project project={project} key={key} />
                })}
            </div>
        </section>
    )
}

function Project({ project }: { project: TypeProject }) {
    const { name, description, url, highlights, slug, github } = project

    return (
        <>
            <article className="flex flex-col w-full p-4  space-y-2 hover:bg-zinc-100  dark:hover:bg-zinc-900/20 rounded-xl  ease-in-out duration-200">
                <header className="flex items-center justify-between">
                    <a
                        className="group flex gap-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 decoration-slice underline-offset-[5px] hover:underline"
                        href={url}
                        target="_blank"
                    >
                        <LinkIcon className=" w-4 opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
                        <span className="text-base">{name}</span>
                    </a>
                    <div className="flex items-center gap-1">
                        <ChartColumnBig className="w-4 opacity-60 duration-200 hover:opacity-100" />
                    </div>
                </header>
                <main className="flex-grow space-y-2 overflow-hidden">
                    <p className=" text-left  text-foreground/65">
                        {description}
                    </p>
                    <div className=" flex flex-wrap gap-x-4 gap-1 items-start justify-start">
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
                </main>
                <footer className="hover:text-[#9d4cfa] font-semibold  flex-shrink-0">
                    <Link
                        href={`/projects/${slug}`}
                        className="group flex hover:underline underline-offset-4 items-center text-base"
                    >
                        ver más
                    </Link>
                </footer>
            </article>
        </>
    )
}
export default Projects
