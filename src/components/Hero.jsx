"use client"
import { BackgroundBeams } from "./ui/background-beams"
import { Highlight } from "./ui/hero-highlight"
import Image from "next/image"
import { FloatingIcon } from "./FloatingIcon"
import { data } from "../data.js"
import { onest } from "../fonts/onest.js"

export default function Hero() {
    const { name, label, image, status, profiles } = data.basics
    return (
        <section className="mx-auto max-w-screen-lg  content-center px-4 xs:px-6 sm:px-8">
            <header className="relative flex flex-row-reverse flex-wrap-reverse justify-end sm:flex-nowrap [@media(width>=37rem)]:flex-row [@media(width>=37rem)]:justify-between">
                <div>
                    <h1 className="text-balance font-header">
                        <span className="block text-4xl font-extrabold tracking-wide opacity-90">
                            ¡Hola! Soy
                            <Highlight className="text-black dark:text-white">
                                {name}
                            </Highlight>
                        </span>
                    </h1>

                    <p className="mt-4 block text-2xl font-bold text-foreground/50">
                        {label}
                        <strong>Software</strong>
                    </p>
                </div>

                <div className="-mt-2 mb-6 mr-10 aspect-square size-16 min-h-16 min-w-16 overflow-clip rounded-full  object-cover xs:min-h-24 xs:min-w-24 sm:mb-0 md:-mt-4 md:min-h-28 md:min-w-28 lg:-mt-2 2xl:-mt-0 [@media(width>=37rem)]:mr-14">
                    <Image
                        width="400"
                        height="400"
                        className=""
                        src={image}
                        alt="Avatar"
                        loading="eager"
                        formats={["avif", "webp", "png"]}
                    />
                </div>
            </header>

            <div>
                <p
                    className={`${onest.className} mt-12  max-w-full md:max-w-[90%] text-pretty text-left text-lg lg:text-xl text-foreground/65 xs:text-lg  leading-8"`}
                >
                    {"Estudiante de "}
                    <strong>Ingeniería de Software</strong>
                    {" con buena formación académica en el "}
                    <strong>Bachillerato Internacional,</strong>
                    {
                        " donde adquirí conocimientos en Tecnologías de la Información en una Sociedad Global "
                    }
                    <strong>(TISG) e inglés.</strong>
                    {
                        "  Me apasiona el desarrollo de software y he elaborado proyectos "
                    }
                    <strong>web, móviles y de inteligencia de negocios,</strong>
                    {
                        " aplicando metodologías ágiles como Scrum y Kanban. Busco aplicar y ampliar mis habilidades en un entorno innovador."
                    }
                </p>

                <div className="mt-8">
                    <div className="mt-2 flex flex-col items-center gap-x-2 sm:flex-row ">
                        <button className="inline-flex h-12 animate-shimmer-btn items-center justify-center gap-x-2 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="relative flex h-[0.7em] w-[0.7em]">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 animate-duration-[1000ms]"></span>
                                <span className="relative inline-flex h-[0.7em] w-[0.7em] rounded-full bg-green-500"></span>
                            </span>
                            {status}
                        </button>

                        <FloatingIcon profiles={profiles} />
                    </div>
                </div>
            </div>
            <BackgroundBeams />
        </section>
    )
}
