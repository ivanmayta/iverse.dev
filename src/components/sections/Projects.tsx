"use client"
import {
    ArrowRight,
    ChartColumnBig,
    CircleChevronRight,
    FolderCodeIcon,
    Gamepad2,
    LaptopMinimal,
    LinkIcon,
    PanelsTopLeft,
    Smartphone,
} from "lucide-react"
import { projects } from "@/data/projects"
import React from "react"
import { Project as TypeProject } from "@/types/projects.type"
import Link from "next/link"
import { space } from "@/fonts/fonts"
import BadgeTools from "../ui/badge-tools"
import { usePathname } from "next/navigation"

const Projects = () => {
    const pathName = usePathname()
    return (
        <section className="group/sub mx-auto max-w-2xl w-full ">
            <div className="flex items-center justify-between pb-2">
                <h2
                    className={`flex group-hover/sub:text-[#9d4cfa] flex-row items-center pb-2 text-xl lg:leading-tight tracking-wide font-medium text-black dark:text-zinc-500  ${space.className}`}
                >
                    / Projects
                </h2>
                {pathName === "/" && (
                    <Link
                        href={"/projects"}
                        className="flex opacity-60 duration-200 hover:opacity-100"
                    >
                        view all
                        <ArrowRight className="w-4" />
                    </Link>
                )}
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 -mx-3.5  ">
                {pathName === "/"
                    ? projects.slice(0, 4).map((project) => {
                          return (
                              <Project key={project.name} project={project} />
                          )
                      })
                    : projects.map((project) => {
                          return (
                              <Project
                                  key={project.name}
                                  project={project}
                                  showImage={true}
                              />
                          )
                      })}
            </div>
        </section>
    )
}

function Project({
    project,
    showImage,
}: {
    project: TypeProject
    showImage?: boolean
}) {
    const { name, description, url, highlights, slug, type } = project
    const typeIcons = {
        web: <PanelsTopLeft className="w-4 opacity-60 duration-200 " />,
        mobile: <Smartphone className="w-4 opacity-60 duration-200 " />,
        desktop: <LaptopMinimal className="w-4 opacity-60 duration-200 " />,
        bi: <ChartColumnBig className="w-4 opacity-60 duration-200 " />,
        videogame: <Gamepad2 className="w-4 opacity-60 duration-200 " />,
    }
    return (
        <>
            <article className=" group/image flex flex-col w-full p-4  space-y-2 hover:bg-zinc-100  dark:hover:bg-zinc-900/20 rounded-xl  ease-in-out duration-0">
                <header className="flex items-center justify-between">
                    <Link
                        className=" flex gap-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 decoration-slice underline-offset-[5px] group-hover/image:underline"
                        href={`/projects/${slug}`}
                    >
                        <FolderCodeIcon className=" w-4 opacity-50 duration-200 group-hover/image:translate-x-[1.5px] group-hover/image:opacity-100" />
                        <span className="text-base">{name}</span>
                    </Link>
                    <div className="flex items-center gap-1">
                        {typeIcons[type]}
                        {/*

                            */}
                        <Link
                            href={url}
                            target="_blank"
                            className="group flex hover:underline underline-offset-4 items-center text-base"
                        >
                            <LinkIcon className="w-4 opacity-60 duration-200 hover:opacity-100" />
                        </Link>
                    </div>
                </header>
                <main className="flex-grow space-y-2 overflow-hidden">
                    {showImage && (
                        <Link
                            href={`/projects/${slug}`}
                            className="group/image"
                        >
                            <img
                                className="w-full h-48 object-cover rounded-lg aspect-video"
                                src={project.images[0]}
                                alt={`Imagen-${project.name}`}
                            />
                        </Link>
                    )}
                    <p className=" text-left  text-foreground/65">
                        {description}
                    </p>
                    <div className=" flex flex-wrap gap-x-4 gap-1 items-start justify-start">
                        {highlights &&
                            highlights.map((highlight) => {
                                const { name, icon: Icon } = highlight
                                return (
                                    <BadgeTools
                                        key={name}
                                        icon={<Icon className="w-4" />}
                                        text={name}
                                    />
                                )
                            })}
                    </div>
                </main>
            </article>
        </>
    )
}
export default Projects
