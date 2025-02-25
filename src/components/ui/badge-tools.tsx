import { JSX } from "react"

interface BadgeToolsProps {
    icon: React.ReactNode | string
    text: string
}
export default function BadgeTools({ icon, text }: BadgeToolsProps) {
    return (
        <div className="flex  items-center justify-center">
            {icon}
            <span className="text-zinc-800 dark:text-zinc-100  text-sm">
                {text}
            </span>
        </div>
    )
}
