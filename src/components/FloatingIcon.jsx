import React from "react"
import Link from "next/link"

export function FloatingIcon({ profiles }) {
    return (
        <ul className="flex gap-x-2 z-40">
            {profiles.map((profile) => {
                return (
                    <li
                        className=" hover:bg-neutral-900 p-2  rounded-sm "
                        key={profile.network}
                    >
                        <Link
                            key={profile.network}
                            href={profile.url}
                            target="_blank"
                            className="flex items-center justify-center rounded-full  shadow-lg box-content text-current sm:size-7 md:size-8  hover:text-accent-foreground/80"
                        >
                            {profile.icon}
                        </Link>

                        
                    </li>
                )
            })}
        </ul>
    )
}
