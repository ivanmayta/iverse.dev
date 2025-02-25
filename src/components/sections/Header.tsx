import TooltipStatus from "@/components/ui/tooltip-status"

export default function Header() {
    return (
        <header className="w-full pt-6 flex max-w-2xl mx-auto items-center justify-between ">
            <nav className="flex text-sm  text-gray-600 dark:text-gray-200">
                <a
                    href="/"
                    className=" aspect-auto flex group justify-center items-center gap-2"
                >
                    <img
                        className="size-14  rounded-full  opacity-90"
                        src="/logo.webp"
                        alt="Icon of iverse.dev"
                        loading="eager"
                    />
                </a>
                <div className="flex flex-col justify-center">
                    <h1 className=" text-xl font-bold ">iverse.dev</h1>
                    <span className=" flex gap-2 font-semibold text-sm text-zinc-500 group-hover:opacity-75 ">
                        @iversedev
                        <ul className="relative flex px-2 border rounded-md cursor-pointer">
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
                        </ul>
                    </span>
                </div>
            </nav>
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
