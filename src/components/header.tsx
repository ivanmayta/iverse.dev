"use client"
import Link from "next/link"
import { mplus1code } from "@/font/fonts"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function Header() {
    const pathname = usePathname()
    const navItems = [
        {
            label: "Home",
            href: "/",
            active: pathname === "/",
        },
        {
            label: "About",
            href: "#about",
            active: pathname === "/about",
        },
        {
            label: "Projects",
            href: "/projects",
            active: pathname === "/projects",
        },
    ]
    return (
        <header className="flex items-center justify-between py-12">
            <h1 className="flex items-center">
                <Link href="/" className={mplus1code.className}>
                    <span className="text-xl font-medium">iverse.dev</span>
                    <span className="text-zinc-400"> ~ ivan</span>
                </Link>
            </h1>
            <nav className="flex items-center gap-4">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "text-sm font-medium hover:underline ",
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
