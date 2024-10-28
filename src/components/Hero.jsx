import { data } from "../data.js"

export default function Hero() {
    const { name, label, status } = data.basics
    return (
        <section className="mx-auto max-w-3xl  content-center  pt-12">
            <article className="relative flex flex-row-reverse pb-4 flex-wrap-reverse justify-end sm:flex-nowrap [@media(width>=37rem)]:flex-row [@media(width>=37rem)]:justify-between">
                <p className="text-balance tracking-wide leading-loose">
                    <span className="block opacity-80 text-foreground/90">
                        ¡Hola! Soy{" "}
                        <b className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-left after:scale-x-0 after:animate-[expand_0.5s_ease-in-out_forwards]">
                            {name}
                        </b>
                        {label}
                    </span>
                </p>
            </article>

            <div className=" font-medium inline-flex items-center gap-2 animate-shine bg-[linear-gradient(110deg,#939393,45%,#1e2631,55%,#939393)] bg-[length:200%_100%] text-transparent bg-clip-text">
                <span className="relative flex h-[0.7em] w-[0.7em]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 animate-duration-[1000ms]"></span>
                    <span className="relative inline-flex h-[0.7em] w-[0.7em] rounded-full bg-green-500"></span>
                </span>
                {status}
            </div>
        </section>
    )
}
