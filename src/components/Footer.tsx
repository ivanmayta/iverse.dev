import { ArrowUpRight } from "lucide-react"
import { Heart } from "lucide-react"

function Footer() {
    return (
        <footer className="max-w-3xl mx-auto flex items-center justify-between py-6 text-foreground/65">
            <div className="group">
                <a
                    className="flex  items-center  underline-offset-[5px] hover:underline decoration-dotted gap-2 "
                    href="https://github.com/ivanmayta"
                    target="_blank"
                >
                    <Heart className="w-4 text-red-500 group-hover:transform group-hover:animate-pulse" />
                    <span> by ivanmayta</span>
                    <ArrowUpRight className="w-4 opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
                </a>
            </div>

            <span>2024</span>
        </footer>
    )
}

export default Footer
