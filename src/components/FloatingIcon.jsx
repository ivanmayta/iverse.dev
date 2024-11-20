import React from "react"
import Link from "next/link"
import { FileCode } from "lucide-react"
import { IconLinkedIn, XIcon, GitHub } from "@/icons/socials"
const NETWORKS = {
    LinkedIn: IconLinkedIn,
    X: XIcon,
    GitHub,
    Cv: FileCode,
}
export function FloatingIcon({ profiles }) {
    return (
        <ul className="flex gap-2">
            {profiles.map((profile) => {
                const Icon = NETWORKS[profile.network]
                return (
                    <li
                        className="relative hover:bg-neutral-900  rounded-lg group p-2 hover:transition-all"
                        key={profile.network}
                    >
                        <Link
                            key={profile.network}
                            href={profile.url}
                            target="_blank"
                            className="flex shadow-lg text-current "
                        >
                            <Icon className="text-neutral-300" />
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
