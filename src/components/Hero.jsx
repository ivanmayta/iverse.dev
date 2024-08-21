"use client"
import { BackgroundBeams } from "./ui/background-beams"
import { Highlight } from "./ui/hero-highlight"
import Image from "next/image"
import { FloatingIcon } from "./FloatingIcon"
import { montserrat } from "@/fonts/montserrat"
import { Onest } from "next/font/google"
const onest = Onest({ subsets: ["latin"], weight: "300" })

export default function Hero() {
    return (
        <section className="mx-auto max-w-screen-lg  content-center px-4 xs:px-6 sm:px-8">
            <header className="relative flex flex-row-reverse flex-wrap-reverse justify-end sm:flex-nowrap [@media(width>=37rem)]:flex-row [@media(width>=37rem)]:justify-between">
                <div>
                    <h1 className="text-balance font-header">
                        <span className="block text-4xl font-extrabold tracking-wide opacity-90">
                            Hey! I m
                            <Highlight className="text-black dark:text-white">
                                {" "}
                                Ivan Mayta.
                            </Highlight>
                        </span>
                    </h1>

                    <p className="mt-4 block text-2xl font-bold text-foreground/50">
                        I am a <strong>Software </strong>
                        Developer
                    </p>
                </div>

                <div className="-mt-2 mb-6 mr-10 aspect-square size-16 min-h-16 min-w-16 overflow-clip rounded-full bg-white object-cover xs:min-h-24 xs:min-w-24 sm:mb-0 md:-mt-4 md:min-h-28 md:min-w-28 lg:-mt-2 2xl:-mt-0 [@media(width>=37rem)]:mr-14">
                    <Image
                        width="400"
                        height="400"
                        className="relative right-0.5 top-0.5"
                        src="/image/jisoo.webp"
                        alt="Avatar"
                        loading="eager"
                        formats={["avif", "webp", "png"]}
                    />
                </div>
            </header>

            <div>
                <p
                    className={`${onest.className} mt-12  max-w-[90%] text-pretty text-left text-lg lg:text-xl text-foreground/65 xs:text-lg  leading-8"`}
                >
                    Especializado en desarrollo de videojuegos, pero también
                    apasionado por el desarrollo web. Con +6 años de experiencia
                    programando y
                    <strong> +4 años de el experiencia profesional</strong>,
                    estoy
                    <b>abierto a oportunidades</b> en la industria de
                    videojuegos, aunque actualmente me encuentro
                    <strong>
                        {" "}
                        en busca activa de un puesto como desarrollador backend
                    </strong>
                </p>

                <div className="mt-8">
                    <div className="mt-2 flex flex-row items-center gap-x-2 ">
                        <button className="inline-flex h-12 animate-shimmer-btn items-center justify-center gap-x-2 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="relative flex h-[0.7em] w-[0.7em]">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 animate-duration-[1000ms]"></span>
                                <span className="relative inline-flex h-[0.7em] w-[0.7em] rounded-full bg-green-500"></span>
                            </span>
                            Disponible
                        </button>
                        <span>|</span>
                        <FloatingIcon />
                    </div>
                </div>
            </div>
            <BackgroundBeams />
        </section>
    )
}
