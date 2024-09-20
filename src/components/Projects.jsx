/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from "framer-motion"
import { CodeIcon } from "@/icons/CodeIcon"
import ArrowUp from "@/icons/ArrowUp"

import { data } from "../data"
import { Onest } from "next/font/google"
const onest = Onest({ weight: "400", subsets: ["latin"] })

const Projects = ({ className, title }) => {
    const { projects } = data
    return (
        <section className={`${className} `}>
            <h1 className=" flex flex-row items-center pb-6 text-xl lg:leading-tight tracking-tight font-medium text-black dark:text-white">
                <CodeIcon className="w-8 h-8 mr-2" />
                {title}
            </h1>

            {projects.map((project, key) => {
                return <Project project={project} key={key} />
            })}
        </section>
    )
}

function Project({ project }) {
    const { name, description, images, url, type, icon, highlights } = project

    return (
        <>
            <section className="flex flex-col md:flex-row  mx-auto border rounded-lg p-4 mb-8 ">
                <article className="w-full md:w-[60%] space-y-2">
                    <header className="group  gap-[6px] ">
                        <a
                            className="font-semibold  flex gap-1 decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline"
                            href={url}
                            target="_blank"
                        >
                            <span>{name}</span>
                            <ArrowUp className=" w-4 opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
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
                                highlights.map((highlight, idx) => (
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

                <div className="w-full md:w-[40%] mx-auto flex justify-center items-center">
                    {images.map((image, idx) => (
                        <motion.div
                            key={"images" + idx}
                            style={{
                                rotate: Math.random() * 20 - 10,
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 100,
                            }}
                            whileTap={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 100,
                            }}
                            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                        >
                            <img
                                src={image}
                                alt="bali images"
                                width="500"
                                height="500"
                                className="rounded-lg h-40 w-40  object-cover flex-shrink-0"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Projects
