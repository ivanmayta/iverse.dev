import { highlightedText } from "@/lib/utils.js"
import { data } from "../data.js"

export default function Hero() {
    const { name, label, status, summary, achievements } = data.basics
    return (
        <section className="mx-auto w-full max-w-3xl  content-center  pt-12">
            <article className="relative flex flex-col gap-2 pb-4 ">
                <h1 className="text-balance tracking-wide leading-normal">
                    <span className="block opacity-80 text-foreground/90">
                        ¡Hola! Soy{" "}
                        <b className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-left after:scale-x-0 after:animate-[expand_0.5s_ease-in-out_forwards]">
                            {name}
                        </b>
                    </span>
                </h1>
                {achievements.map((achievement, idx) => {
                    return (
                        <span
                            key={idx}
                            className="block opacity-80 text-foreground/80 md:w-10/12"
                        >
                            {highlightedText(
                                achievement.label,
                                [
                                    "Frontend",
                                    "Developer",
                                    "software,",
                                    "engineer,",
                                    "International",
                                    "Baccalaureate",
                                    "Diploma",
                                    "ingeniero",
                                    "Bachillerato",
                                    "Internacional.",
                                ],
                                "font-bold"
                            )}
                        </span>
                    )
                })}
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
