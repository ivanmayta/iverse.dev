import { space } from "@/fonts/fonts"
import Jsconf from "@/icons/jsconf"
import { GitHub } from "@/icons/socials"
import { CornerDownRight } from "lucide-react"
export default function Contributions() {
    return (
        <section className="group/contributions max-w-2xl mx-auto">
            <h2
                className={` group-hover/contributions:text-[#9d4cfa] flex flex-row items-center pb-4 text-xl lg:leading-tight tracking-wide font-medium text-black dark:text-zinc-500  ${space.className}`}
            >
                / Contributions
            </h2>
            <div>
                <ul>
                    <li>
                        <article>
                            <header className="flex gap-4 items-center ">
                                <a
                                    className="flex gap-2 font-semibold group hover:underline underline-offset-4 items-center text-base"
                                    href="https://jsconf.es"
                                    target="_blank"
                                >
                                    <CornerDownRight className="w-4 opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
                                    <Jsconf />
                                    jsconf.es
                                </a>
                                <a
                                    target="_blank"
                                    href="https://github.com/midudev/jsconf.es"
                                >
                                    <GitHub className="w-4" />
                                </a>
                            </header>
                            <main>
                                <p className="font-medium">
                                    🎊 Web development event with javascript.
                                    organized by Midudev.
                                </p>
                            </main>
                            <footer>
                                <span className="text-foreground/65">
                                    Improve web design based on the Figma.
                                </span>
                            </footer>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
    )
}
