import { ArrowUpRight } from "lucide-react"
import { Heart } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full flex items-center justify-between py-6">
            <div className="group">
                <a
                    className="flex  items-center  underline-offset-[5px] hover:underline decoration-dotted gap-2 "
                    href="https://github.com/ivanmayta"
                    target="_blank"
                >
                    <Heart className="w-4 text-red-500 group-hover:transform group-hover:animate-pulse" />
                    <span> iverse.dev</span>
                    <ArrowUpRight className="w-4 opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
                </a>
            </div>

            <span>2024</span>
        </footer>
    )
}
