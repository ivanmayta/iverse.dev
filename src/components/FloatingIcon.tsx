import Link from "next/link"
import { FileCode } from "lucide-react"
import { IconLinkedIn, XIcon, GitHub } from "@/icons/socials"
import type { SocialLinks } from "@/types/social-links.type"
const NETWORKS = {
    LinkedIn: IconLinkedIn,
    X: XIcon,
    GitHub,
    Cv: FileCode,
}
export function FloatingIcon({
    profiles,
}: {
    profiles: SocialLinks["socialsLinks"]
}) {
    return (
        <ul className="flex gap-3">
            {profiles.map((profile) => {
                const Icon = NETWORKS[profile.network]
                return (
                    <li
                        className="relative rounded-lg group py-2 hover:transition-all"
                        key={profile.network}
                    >
                        <Link
                            key={profile.network}
                            href={profile.url}
                            target="_blank"
                            className="flex shadow-lg text-current "
                        >
                            <Icon className="opacity-60 hover:opacity-100 transition ease-out" />
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
