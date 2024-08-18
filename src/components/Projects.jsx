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
        description:
            "Loerem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/image/jisoo.webp",
        images: ["/image/jisoo.webp", "/image/jisoo.webp", "/image/jisoo.webp"],
        href: "/proyecto-1",
    },
    {
        title: "Proyecto 2",
        description:
            "Loroem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/image/jisoo.webp",
        images: ["/image/jisoo.webp", "/image/jisoo.webp", "/image/jisoo.webp"],
        href: "/proyecto-2",
    },
    {
        title: "Proyecto 3",
        description:
            "Loroem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/image/jisoo.webp",
        images: ["/image/jisoo.webp", "/image/jisoo.webp", "/image/jisoo.webp"],
        href: "/proyecto-3",
    },
]
export default function Projects({ className }) {
    return (
        <article className={cn(className)}>
            <h1 className="text-2xl lg:text-3xl lg:leading-tight tracking-tight font-medium text-black dark:text-white">
                Proyectos
            </h1>
            <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3">
                {PROYECTS.map((project, key) => (
                    <Project key={key} project={project} />
                ))}
            </section>
        </article>
    )
}

function Project({ project }) {
    const { title, description, images, image, href } = project
    return (
        <div>
            <Modal>
                <PinContainer title="/ui.aceternity.com">
                    <div className="flex basis-full overflow-hidden flex-col tracking-tight text-slate-100/50 sm:basis-1/2  w-full h-full p-4">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                            {title}
                        </h3>
                        <div className="text-base !m-0 !p-0 font-normal">
                            <span className="text-slate-500 ">
                                {description}
                            </span>
                        </div>
                        <div className="flex flex-1 justify-center w-full aspect-square overflow-hidden rounded-lg mt-4 ">
                            <Image
                                src="/image/jisoo.webp"
                                alt="jisoo"
                                width="500"
                                height="500"
                                className="  lg:w-full h-full sm:w-[70%] rounded-lg bg-gradient-to-br aspect-square"
                            ></Image>
                        </div>
                    </div>
                </PinContainer>

                <ModalBody>
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center">
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
                </ModalBody>
            </Modal>
        </div>
    )
}
