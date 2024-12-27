import { ArrowUpRight, ChevronRight, CodeXml } from "lucide-react"
import { projects } from "@/data/projects"
import React from "react"
import { Project as TypeProject } from "@/types/projects.type"
import Link from "next/link"
import { Commant } from "@/icons/command"

const Projects = () => {
    return (
        <section className="mx-auto max-w-3xl content-center pb-8">
            <h2 className="flex flex-row items-center pb-6 pl-2 text-xl lg:leading-tight tracking-tight font-medium text-black dark:text-white">
                <CodeXml className="w-8 h-8 mr-2" />
                Proyectos
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, key) => {
                    return <Project project={project} key={key} />
                })}
            </div>
        </section>
    )
}

function Project({ project }: { project: TypeProject }) {
    const { name, description, images, url, highlights, slug } = project

    return (
        <>
            <article className="flex flex-col w-full  space-y-2 hover:bg-zinc-100  dark:hover:bg-zinc-900/40 rounded-xl p-4 ease-in-out duration-200">
                <header className="group gap-[6px] flex-shrink-0 ">
                    <a
                        className="flex text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 decoration-slice underline-offset-[5px] hover:underline"
                        href={url}
                        target="_blank"
                    >
                        <span>{name}</span>
                        <ArrowUpRight className=" w-4 opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
                    </a>
                </header>
                <main className="flex-grow space-y-2 overflow-hidden">
                    <p className="text-pretty text-left  text-foreground/65">
                        {description}
                    </p>
                    <div className=" flex flex-wrap gap-x-4 gap-1 items-start justify-start max-w-sm ">
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
                <footer className="text-teal-500 font-semibold  flex-shrink-0">
                    <Link
                        href={`/projects/${slug}`}
                        className="flex hover:underline group items-center text-base"
                    >
                        <Commant className=" stroke-current group-hover:scale-110 transition-transform" />
                        ver más
                    </Link>
                </footer>
            </article>
        </>
    )
}
export default Projects
