import TooltipStatus from "@/components/ui/tooltip-status"
import Link from "next/link"
import { GitHub } from "@/icons/socials"
import Navigation from "../ui/navigation"
export default function Header() {
    return (
        <header className="w-full pt-6 flex max-w-2xl mx-auto items-center justify-between ">
            <div className="flex gap-4 text-sm  text-gray-600 dark:text-gray-200">
                <Link
                    href="/"
                    className="flex text-xl font-bold  justify-center items-center"
                >
                    <img
                        className="size-14  rounded-full  opacity-90"
                        src="/logo.webp"
                        alt="Icon of iverse.dev"
                        loading="eager"
                    />
                    <div>
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
