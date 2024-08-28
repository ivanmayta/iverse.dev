import React from "react"
import Link from "next/link"

export function FloatingIcon({ profiles }) {
    return (
        <ul className="flex z-40">
            {profiles.map((profile) => {
                return (
                    <li
                        className=" hover:bg-neutral-900 rounded-sm group p-2 hover:transition-all relative "
                        key={profile.network}
                    >
                        <Link
                            key={profile.network}
                            href={profile.url}
                            target="_blank"
                            className="flex shadow-lg text-current sm:size-7 md:size-8  hover:text-accent-foreground/80"
                        >
                            {profile.icon}
                        </Link>
                        <span className="absolute top-full -inset-1 transition-all scale-0 rounded bg-background p-2 text-xs text-white group-hover:scale-100 text-center">{profile.network}</span>

                        
                    </li>
                )
            })}
        </ul>
    )
}
