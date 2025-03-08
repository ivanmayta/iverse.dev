import TooltipStatus from "@/components/ui/tooltip-status"
import Link from "next/link"
import { GitHub } from "@/icons/socials"
import Navigation from "../ui/navigation"
export default function Header() {
    return (
        <header className="max-w-2xl mx-auto pt-6 sm:flex sm:justify-between sm:items-center">
            <div className="flex">
                <Link href="/" className=" flex">
                    <img
                        className="size-14  rounded-full  opacity-90"
                        src="/logo.webp"
                        alt="Icon of iverse.dev"
                        loading="eager"
                    />
                    <div className="text-lg font-bold ">
                        iverse.dev
                        <span className=" flex gap-2 font-semibold text-sm text-zinc-500 group-hover:opacity-75 ">
                            @iversedev
                            <div className="relative flex px-2 border rounded-md cursor-pointer">
                                <TooltipStatus
                                    icon="✨"
                                    text="Turning ideas into reality"
                                />
                                <TooltipStatus
                                    icon="🧑🏻‍💻"
                                    text="Building apps with passion"
                                />
                                <TooltipStatus icon="☕" text="Love coffe" />
                                <TooltipStatus
                                    icon="📄"
                                    text="Love write programming posts"
                                />
                                <TooltipStatus
                                    icon="🔍"
                                    text="Exploring new tech trends"
                                />
                                <TooltipStatus
                                    icon={<AvailabilityStatus />}
                                    text="Available for work"
                                />
                            </div>
                        </span>
                    </div>
                </Link>
            </div>
            <Navigation />
        </header>
    )
}
function AvailabilityStatus() {
    return (
        <span className="relative inline-flex">
            <span className="absolute inline-flex  h-3 w-3 animate-ping rounded-full bg-green-500 opacity-75 animate-duration-[1000ms]"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
    )
}
