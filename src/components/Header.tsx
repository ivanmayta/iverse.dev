export default function Header() {
    return (
        <header className="w-full flex inset-x-0  z-50 overflow-x-auto fold:overflow-x-clip max-w-2xl mx-auto  ">
            <nav className="flex w-full pt-6  text-sm  text-gray-600 dark:text-gray-200">
                <a
                    href="/"
                    className=" aspect-auto flex group justify-center items-center gap-2"
                >
                    <img
                        className="size-14  rounded-full bg-black dark:bg-transparent opacity-90"
                        src="/logo.webp"
                        alt="icono de perfil"
                        loading="eager"
                    />
                </a>
                <div className="flex flex-col justify-center">
                    <h1 className=" text-xl font-bold ">iverse.dev</h1>
                    <span className=" flex gap-2 font-semibold text-sm text-zinc-500 group-hover:opacity-75 ">
                        @iversedev
                        <div className="px-2  border rounded-md">
                            <span>✨</span>
                            <span>☕</span>
                            <span>📄</span>

                            <AvailabilityStatus />
                        </div>
                    </span>
                </div>
            </nav>
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
