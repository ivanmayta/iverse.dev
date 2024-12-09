import { ArrowUpRight, CodeXml } from "lucide-react"
import { data } from "../data"
import { Marquee3D } from "./Marquee3D"

const Projects = ({ className, title }) => {
    const { projects } = data
    return (
        <section className={className}>
            <h1 className=" flex flex-row items-center pb-6 text-xl lg:leading-tight tracking-tight font-medium text-black dark:text-white">
                <CodeXml className="w-8 h-8 mr-2" />
                {title}
            </h1>

            {projects.map((project, key) => {
                return <Project project={project} key={key} />
            })}
        </section>
    )
}

function Project({ project }) {
    const { name, description, images, url, highlights } = project

    return (
        <>
            <section className="flex flex-col md:flex-row  mx-auto  border-b border-foreground/10 mb-8 ">
                <article className="w-full md:w-[60%] space-y-2">
                    <header className="group  gap-[6px] ">
                        <a
                            className="font-semibold  flex gap-1 decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline"
                            href={url}
                            target="_blank"
                        >
                            <span>{name}</span>
                            <ArrowUpRight className=" w-4 opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
                        </a>
                    </header>
                    <main className="pb-2">
                        <p className="text-pretty text-left  text-foreground/65">
                            {description}
                        </p>
                    </main>
                    <footer>
                        <div className=" flex flex-wrap gap-x-4 gap-y-4 items-start justify-start max-w-sm ">
                            {highlights &&
                                highlights.map((highlight) => (
                                    <div
                                        key={highlight.name}
                                        className="flex  items-center justify-center"
                                    >
                                        {highlight.icon}
                                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                            {highlight.name}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </footer>
                </article>
                <Marquee3D images={images} />
            </section>
        </>
    )
}
export default Projects
