import { ImagesSlider } from "@/components/ui/images-slider"
import { projects } from "@/data/projects"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) {
        return <div>Project not found</div>
    }
    const { highlights } = project

    return (
        <section className="flex flex-col pt-12 w-full max-w-2xl mx-auto gap-2  ">
            <div className="flex text-amber-600  font-semibold items-center gap-1">
                <Link
                    href="/projects"
                    className="font-semibold hover:underline"
                    scroll={false}
                >
                    Projects
                </Link>
                <ChevronRightIcon className=" text-zinc-300  h-4 w-4 self-center" />
                <h3 className="text-white font-bold">{project?.name}</h3>
            </div>
            <div className="text-start  space-y-6">
                <h2>{project?.description}</h2>
            </div>
            <div className="flex gap-2 pb-6">
                <ul className="flex flex-col gap-2 ">
                    <li className="flex gap-2 items-center">
                        <span className="text-sm bg-green-500/30 text-green-500 px-2 rounded-sm">
                            PLATFORM
                        </span>
                        <span>{project?.type}</span>
                    </li>
                    <li className="flex gap-2 items-start">
                        <span className="text-sm bg-green-500/30 text-green-500 px-2 rounded-sm">
                            STACK
                        </span>
                        <div className=" flex flex-wrap gap-x-4 gap-2 items-start justify-start ">
                            {highlights &&
                                highlights?.map((highlight) => {
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
                    </li>
                    <li className="flex gap-2 items-center">
                        <span className="text-sm bg-green-500/30 text-green-500 px-2 rounded-sm">
                            WEBSITE
                        </span>
                        <a
                            className="hover:underline text-amber-500 italic"
                            href={project?.url}
                            target="_blank"
                        >
                            {project?.url}
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-6">
                <ImagesSlider
                    className="w-full h-auto aspect-video rounded-md"
                    images={project?.images}
                >
                    <div></div>
                </ImagesSlider>
            </div>
            {/**
                 * @todo: add marquee3d
                <Marquee3D images={project?.images} />
                 */}

            <Link
                className="group text-green-400 flex items-center pb-6 font-semibold underline underline-offset-2"
                href="/projects"
                scroll={false}
            >
                <ChevronRightIcon
                    size={16}
                    className="stroke-current group-hover:scale-110 transition-transform"
                />
                cd . .
            </Link>
        </section>
    )
}
