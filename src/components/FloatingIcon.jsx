import React from "react"
import Link from "next/link"

export function FloatingIcon({ profiles }) {
    return (
        <ul className="flex">
            {profiles.map((profile) => {
                return (
                    <li
                        className="relative hover:bg-neutral-800 rounded-lg group p-2 hover:transition-all"
                        key={profile.network}
                    >   
                        <Link
                            key={profile.network}
                            href={profile.url}
                            target="_blank"
                            className="flex shadow-lg text-current "
                        >
                            {profile.icon}
                        </Link>
                        <span className="absolute top-full -inset-1 transition-all scale-0 rounded bg-background text-xs text-slate-300 group-hover:scale-100 text-center">
                            {profile.network}
                        </span>
                    </li>
                )
            })}
        </ul>
    )
}
