import React from "react"
import Link from "next/link"
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react"
import Image from "next/image"

export function FloatingIcon() {
    const links = [
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#hello",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ]
    return (
        <ul className="flex gap-x-2 z-40">
            {links.map((link) => {
                return (
                    <li
                        className=" hover:bg-neutral-900 p-2  rounded-sm "
                        key={link.title}
                    >
                        <Link
                            key={link.title}
                            href={link.href}
                            className="flex items-center justify-center rounded-full  shadow-lg box-content text-current sm:size-7 md:size-8  hover:text-accent-foreground/80"
                        >
                            {link.icon}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
