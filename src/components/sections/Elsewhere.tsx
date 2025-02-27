import { FileCode, Github, LinkedinIcon } from "lucide-react"
import { XIcon } from "@/icons/socials"
import { space } from "@/fonts/fonts"
import BadgeAncores from "../ui/badge-ancores"

export function Elsewhere() {
    return (
        <section className="group max-w-2xl mx-auto">
            <h2
                className={` group-hover:text-[#9d4cfa] flex flex-row items-center pb-4 text-xl lg:leading-tight tracking-wide font-medium text-black dark:text-zinc-500  ${space.className}`}
            >
                / Elsewhere
            </h2>
            <div className="flex text-sm font-normal flex-wrap  gap-3">
                <BadgeAncores icon={<FileCode width={18} />} url="mayta.me" />
                <BadgeAncores
                      icon={<Github width={18} />}
                    url="github.com/ivanmayta"
                />
                <BadgeAncores
                    icon={<XIcon width={18} />}
                    url="x.com/iversedev"
                />
                <BadgeAncores
                    icon={<LinkedinIcon width={18} />}
                    url="linkedin.com/in/iverse/"
                />
            </div>
        </section>
    )
}
