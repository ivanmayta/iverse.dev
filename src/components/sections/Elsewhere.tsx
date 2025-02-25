import { FileCode, Github, LinkedinIcon } from "lucide-react"
import { XIcon } from "@/icons/socials"
import { space } from "@/fonts/fonts"

export function Elsewhere() {
    return (
        <section className="group max-w-3xl mx-auto">
            <h2
                className={` group-hover:text-[#9d4cfa] flex flex-row items-center pb-4 text-xl lg:leading-tight tracking-wide font-medium text-black dark:text-zinc-500  ${space.className}`}
            >
                / Elsewhere
            </h2>
            <div className="flex text-sm font-normal flex-wrap  gap-3">
                <a
                    className=" flex gap-1 border py-1 px-3 rounded-2xl items-center hover:underline"
                    href="https://mayta.me"
                    target="_blank"
                >
                    <FileCode width={18} /> mayta.me
                </a>
                <a
                    className=" flex gap-1 border py-1 px-3 rounded-2xl items-center hover:underline"
                    href="https://github.com/ivanmayta"
                    target="_blank"
                >
                    <Github width={18} /> github.com/ivanmayta
                </a>
                <a
                    className=" flex gap-1 border py-1 px-3 rounded-2xl items-center hover:underline"
                    href="https://x.com/iversedev"
                >
                    <XIcon width={18} /> x.com/iversedev
                </a>
                <a
                    className=" flex gap-1 border py-1 px-3 rounded-2xl items-center hover:underline"
                    href="https://x.com/iversedev"
                >
                    <LinkedinIcon width={18} /> linkedin.com/in/iverse/
                </a>
            </div>
        </section>
    )
}
