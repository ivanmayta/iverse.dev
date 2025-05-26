"use client"
import { Project } from "@/types/types"
import { MagicCard } from "./ui/magic-card"
import { ArrowRight } from "lucide-react"
import { FolderCodeIcon } from "lucide-react"
import Link from "next/link"
import { GlareCard } from "./ui/glare-card"
import { usePathname } from "next/navigation"
export function ProjectCard({ project }: { project: Project }) {
    const pathname = usePathname()
    const showImage = pathname === "/projects"
    const { slug, name, description, stack } = project
    return (
        <div className="h-full w-full group/image">
            <Link
                className=" flex h-full w-full gap-2 text-base  tracking-tight "
                scroll={false}
                href={`/projects/${slug}`}
            >
                <GlareCard>
                    <div className=" relative h-full w-full rounded-xl border border-zinc-800">
                        <MagicCard
                            blur={0.5}
                            borderWidth={1}
                            spread={180}
                            glow={true}
                            disabled={false}
                            proximity={30}
                            inactiveZone={0.01}
                        />
                        <article className=" flex flex-col w-full h-full p-4  space-y-2">
                            <header className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <FolderCodeIcon className=" w-4 opacity-50 duration-200 group-hover/image:translate-x-[1px] group-hover/image:opacity-100" />
                                    <span className="text-base font-medium">
                                        {name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <ArrowRight className="w-4 opacity-60 duration-200 group-hover/image:opacity-100" />
                                </div>
                            </header>
                            <main className="flex-grow space-y-2 overflow-hidden">
                                {showImage && (
                                    <img
                                        src={project.images[0]}
                                        alt={name}
                                        className="w-full h-auto aspect-video object-cover "
                                    />
                                )}
                                <p className=" text-left text-sm  text-foreground/65">
                                    {description}
                                </p>
                            </main>
                            <footer>
                                <div className="mt-auto flex flex-wrap items-start justify-start">
                                    {stack?.map((tech, index) => {
                                        const isString =
                                            typeof tech === "string"
                                        if (isString) {
                                            return (
                                                <span
                                                    className="text-sm  rounded-sm"
                                                    key={index}
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        }
                                        const { icon: Icon } = tech

                                        return (
                                            <span
                                                key={index}
                                                className="flex items-center gap-1 text-sm  px-2 rounded-sm"
                                            >
                                                <Icon className="w-4 h-4" />
                                            </span>
                                        )
                                    })}
                                </div>
                            </footer>
                        </article>
                    </div>
                </GlareCard>
            </Link>
        </div>
    )
}
