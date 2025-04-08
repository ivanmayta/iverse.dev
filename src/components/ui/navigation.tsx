"use client"
import { GitHub } from "@/icons/socials"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navs = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/posts", label: "posts" },
]
export default function Navigation() {
    const pathname = usePathname()
    const normalizePath = (path: string) => {
        const segments = path.split("/")
        return segments.length > 1 ? `/${segments[1]}` : "/"
    }
    console.log(normalizePath(pathname))
    console.log(pathname)
    const isActive = (href: string) => {
        return normalizePath(pathname) === normalizePath(href)
    }
    console.log(isActive(navs[1].href))
    return (
        <nav className="flex gap-4">
            {navs.map(({ href, label }) => (
                <Link
                    className={cn({
                        "font-semibold text-[#9d4cfa] underline":
                            isActive(href),
                        "text-gray-600 dark:text-gray-200 hover:underline":
                            !isActive(href),
                    })}
                    key={href}
                    href={href}
                >
                    {label}
                </Link>
            ))}
            <a
                className="flex gap-1 items-center text-gray-600 dark:text-gray-200 hover:underline"
                href="https://github.com/ivanmayta/iverse.dev"
                target="_blank"
            >
                <GitHub />
                Source
            </a>
        </nav>
    )
}
