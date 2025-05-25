import { projects } from "@/data/projects"
import { mplus1code } from "@/font/fonts"
import { ProjectCard } from "./project-card"
import Link from "next/link"

export function Projects() {
    return (
        <section id="projects" className="group/projects flex flex-col py-4 gap-4">
            <div
                className={`${mplus1code.className} flex items-center justify-between`}
            >
                <h2 className={` group-hover/projects:text-[#9d4cfa] text-zinc-400`}>
                    <span>/ Projects</span>
                </h2>
                <Link
                    href="/projects"
                    className="text-xs text-zinc-400 hover:text-white"
                >
                    view all →
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                {projects.slice(0, 4).map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    )
}
