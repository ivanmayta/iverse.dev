import TooltipStatus from "@/components/ui/tooltip-status"
import Link from "next/link"
import { GitHub } from "@/icons/socials"
import Navigation from "../ui/navigation"
import { MiduIcon } from "@/icons/midu"
import { Circle } from "lucide-react"
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
                                    icon={
                                        <MiduIcon className="inline-flex h-4 w-4" />
                                    }
                                    text="Midu fan"
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
        <span className="relative inline-flex pl-1 ">
            <div className=" bg-green-400 opacity-70 rounded-full h-3 w-3  animate-pulse" />
        </span>
    )
}
