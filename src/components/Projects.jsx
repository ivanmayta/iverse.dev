/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from "framer-motion"
import { CodeIcon } from "@/icons/CodeIcon"
import { data } from "../data"
import { onest } from "@/fonts/onest"

const Projects = ({ className, title }) => {
    const { projects } = data
    return (
        <section className={`${className} ${onest.className}`}>
            <h1 className=" flex flex-row items-center text-2xl pb-12 lg:text-3xl lg:leading-tight tracking-tight font-medium text-black dark:text-white">
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
            <section
                className={`flex flex-col md:flex-row  mx-auto border rounded-lg p-4 mb-8 `}
            >
                <article className="w-full md:w-[60%]">
                    <h1 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100">
                        <strong>{name}</strong>
                    </h1>

                    <p className="text-pretty text-left  text-foreground/65">
                        {description}
                    </p>
                    <div className="py-8 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm ">
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
                </article>
                <article className="w-full md:w-[40%] mx-auto flex justify-center items-center">
                    <div className="flex  items-center">
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
                </article>
            </section>
        </>
    )
}
export default Projects
