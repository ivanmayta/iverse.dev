"use client"
import { projects } from "@/data/projects"
import { mplus1code } from "@/font/fonts"
import { ProjectCard } from "./project-card"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Project } from "@/types/types"
export function Projects() {
    const pathname = usePathname()
    const isInProjectsPage = pathname === "/projects"
    const projectsToShow: Project[] = isInProjectsPage
        ? projects
        : projects.slice(0, 4)
    return (
        <>
            <section
                id="projects"
                className="group/projects flex flex-col py-4 gap-4"
            >
                <div
                    className={`${mplus1code.className} flex items-center justify-between`}
                >
                    <h2
                        className={` group-hover/projects:text-[#9d4cfa] text-zinc-400`}
                    >
                        <span>/ Projects</span>
                    </h2>
                    {!isInProjectsPage && (
                        <Link
                            href="/projects"
                            className="text-xs text-zinc-400 hover:text-white"
                        >
                            view all →
                        </Link>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                    {projectsToShow.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>
        </>
    )
}
