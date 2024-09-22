import { Highlight } from "./ui/hero-highlight"
import { data } from "../data.js"

export default function Hero() {
    const { name, label, status } = data.basics
    return (
        <section className="mx-auto max-w-4xl  content-center px-8 pt-12">
            <article className="relative flex flex-row-reverse pb-4 flex-wrap-reverse justify-end sm:flex-nowrap [@media(width>=37rem)]:flex-row [@media(width>=37rem)]:justify-between">
                <h2 className="text-balance tracking-wide leading-loose">
                    <span className="block opacity-80 text-foreground/90">
                        ¡Hola! Soy
                        <Highlight className="text-black font-semibold dark:text-white">
                            {name}
                        </Highlight>
                        {label}
                    </span>
                </h2>
            </article>

            <div>
                <button className="inline-flex h-8 animate-shimmer-btn items-center justify-center gap-x-2 rounded-md bg-[linear-gradient(110deg,#00FF0000,45%,#141417,70%,#00FF0000)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none">
                    <span className="relative flex h-[0.7em] w-[0.7em]">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 animate-duration-[1000ms]"></span>
                        <span className="relative inline-flex h-[0.7em] w-[0.7em] rounded-full bg-green-500"></span>
                    </span>
                    {status}
                </button>
            </div>
        </section>
    )
}
