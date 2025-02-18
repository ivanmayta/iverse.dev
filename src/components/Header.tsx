import { ModeToggle } from "./ui/mode-togle"

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
                        alt="icono de perfil"
                        loading="eager"
                    />
                </a>
                <div className="flex flex-col justify-center">
                    <h1 className=" text-xl font-bold ">iverse.dev</h1>
                    <span className=" flex gap-2 font-semibold text-sm text-zinc-500 group-hover:opacity-75 ">
                        @iversedev
                        <ul className="relative flex px-2 border rounded-md cursor-pointer">
                            <li>✨</li>
                            <li>☕</li>
                            <li className="group relative">
                                📄
                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-52 border border-gray-500 transition-all scale-0 rounded bg-background text-xs text-slate-300 group-hover:scale-100 text-center p-1">
                                    Love write programming posts
                                </span>
                            </li>
                            <li>
                                <AvailabilityStatus />
                            </li>
                        </ul>
                    </span>
                </div>
            </nav>

            <ModeToggle />
        </header>
    )
}
function AvailabilityStatus() {
    return (
        <span className="relative inline-flex">
            <span className="absolute inline-flex  h-3 w-3   animate-ping rounded-full bg-green-500 opacity-75 animate-duration-[1000ms]"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
    )
}
