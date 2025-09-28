"use client"
import Link from "next/link"
import { mplus1code } from "@/font/fonts"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function Header() {
    const pathname = usePathname()
    const isInProjectsPage = pathname.includes("/projects")
    const navItems = [
        {
            label: "Home",
            href: "/",
            active: pathname === "/",
        },
        {
            label: "Projects",
            href: "/projects",
            active: isInProjectsPage,
        },
        {
            label: "Posts",
            href: "/posts",
            active: pathname === "/posts",
        },
    ]
    return (
        <header
            className={`${mplus1code.className} flex items-center gap-4 sm:gap-0 flex-col  sm:flex-row sm:justify-between py-12`}
        >
            <h1 className="  flex items-center gap-2 group/header">
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-white rounded-lg">
                        <img
                            src="/logo.svg"
                            alt="iverse.dev"
                            className="w-10 h-10 scale-120 group-hover/header:scale-130 transition-all duration-300 "
                        />
                    </div>
                    <span className="text-xl font-medium">iverse.dev</span>
                    <span className="text-zinc-400 hover:text-[#9d4cfa]">
                        {" "}
                        ~ ivan
                    </span>
                </Link>
            </h1>

            <nav className="flex items-center gap-4">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "text-sm  hover:underline ",
                            item.active && "text-purple-600"
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    )
}
