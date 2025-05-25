import { mplus1code } from "@/font/fonts"
import { Jsconf } from "@/icons/jsconf"
import { Github } from "@/icons/github"
import { CornerDownRight } from "lucide-react"
export default function Contributions() {
    return (
        <section className="group/contributions flex flex-col py-4 gap-4">
            <h2
                className={` group-hover/contributions:text-[#9d4cfa] text-zinc-400 ${mplus1code.className}`}
            >
                / Contributions
            </h2>
            <div>
                <ul>
                    <li>
                        <article>
                            <header className="flex gap-4 items-center ">
                                <a
                                    className="flex gap-2 font-medium group hover:underline underline-offset-4 items-center text-base"
                                    href="https://jsconf.es"
                                    target="_blank"
                                >
                                    <CornerDownRight className="w-4 opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
                                    <Jsconf />
                                    jsconf.es
                                </a>
                                <a
                                    className="hover:text-white text-zinc-400"
                                    target="_blank"
                                    href="https://github.com/midudev/jsconf.es"
                                >
                                    <Github />
                                </a>
                            </header>
                            <main>
                                <p className="font-medium">
                                    🎊 Web development event with javascript.
                                    organized by Midudev.
                                </p>
                            </main>
                            <footer>
                                <span className="text-zinc-400 text-sm">
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
