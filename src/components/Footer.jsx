import ArrowUp from "@/icons/ArrowUp"
import { Heart } from "lucide-react"

function Footer() {
    return (
        <footer className="max-w-4xl mx-auto px-8 flex items-center justify-between p-4 pt-12 text-foreground/65">
            <div className="group flex items-center gap-2 ">
                <Heart className="w-4 text-red-500 group-hover:transform group-hover:animate-pulse" />
                <span>Made by Ivan Mayta</span>
                <ArrowUp className="w-4" />
            </div>

            <span>2024</span>
        </footer>
    )
}

export default Footer
