"use client"
import { cn } from "@/lib/utils"
import { PinContainer } from "./ui/3d-pin"
import { motion } from "framer-motion"
import Image from "next/image"

import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
} from "./ui/animated-modal"

const PROYECTS = [
    {
        title: "Proyecto 1",
        description: "Descripcion 1",
        images: ["/image/jisoo.webp"],
        href: "/proyecto-1",
    },
    {
        title: "Proyecto 2",
        description: "Descripcion 2",
        image: "/images/2.jpg",
        href: "/proyecto-2",
    },
    {
        title: "Proyecto 3",
        description: "Descripcion 3",
        image: "/images/3.jpg",
        href: "/proyecto-3",
    },
]
export default function Projects({ className }) {
    return (
        <article className={cn(className)}>
            <h1 className="text-2xl lg:text-3xl lg:leading-tight tracking-tight font-medium text-black dark:text-white">
                Proyectos
            </h1>
            <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                {PROYECTS.map((project, key) => (
                    <Project key={key} project={project} />
                ))}
            </section>
        </article>
    )
}

function Project({ project }) {
    const { title, description, images, href } = project
    return (
        <div>
            <Modal>
                <PinContainer title="/ui.aceternity.com">
                    <div className="flex w-full h-full flex-col p-4 tracking-tight text-slate-100/50  ">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            {title}
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                {description}
                            </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                    </div>
                </PinContainer>

                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            {title}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                                Web
                            </span>{" "}
                            now! ✈️
                        </h4>
                        <div className="flex justify-center items-center">
                            {images &&
                                images.map((image, idx) => (
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
                                        <Image
                                            src={image}
                                            alt="bali images"
                                            width="500"
                                            height="500"
                                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                                        />
                                    </motion.div>
                                ))}
                        </div>
                    </ModalContent>
                    <ModalFooter className="gap-4"></ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    )
}
