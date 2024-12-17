/* eslint-disable @next/next/no-img-element */
import { FloatingIcon } from "@/components/FloatingIcon"
import socialLinks from "@/data/social-links.json"
import type { SocialLinks as TypeSocialLinks } from "@/types/social-links.type"

export default function Header() {
    const data: TypeSocialLinks = socialLinks
    const { socialsLinks: profiles } = data

    return (
        <header className="w-full  mt-2  inset-x-0  z-50 overflow-x-auto fold:overflow-x-clip max-w-4xl mx-auto ">
            <nav className="flex w-full max-w-3xl  mx-auto items-center justify-between  py-4  text-sm font-medium text-gray-600 dark:text-gray-200">
                <a
                    href="/"
                    className=" aspect-auto flex group justify-center items-center gap-2"
                >
                    <img
                        className="size-9  rounded-full bg-black dark:bg-transparent"
                        src="/logo.webp"
                        alt="icono de perfil"
                        loading="eager"
                    />
                    <p className="flex flex-col">
                        <span className="font-bold text-base">iverse.dev</span>
                        <span className="text-xs opacity-60 group-hover:opacity-75 ">
                            @iversedev
                        </span>
                    </p>
                </a>
                <div className="flex items-center gap-x-3">
                    <FloatingIcon profiles={profiles} />
                </div>
            </nav>
        </header>
    )
}
