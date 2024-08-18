export default function Header() {
    const navItems = [
        {
            title: "Inicio",
            label: "experiencia",
            url: "/#experiencia",
        },
        {
            title: "Proyectos",
            label: "proyectos",
            url: "/#proyectos",
        },
        {
            title: "Sobre mí",
            label: "sobre-mi",
            url: "/#sobre-mi",
        },
        {
            title: "Contacto",
            label: "contacto",
            url: "",
        },
    ]
    return (
            <header
                className=" flex items-center justify-center w-full mx-auto mt-2
        inset-x-0 top-0 z-50 min-h-header content-center sticky overflow-x-auto fold:overflow-x-clip"
            >
                <nav className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border  max-w-2xl flex px-3 text-sm font-medium text-gray-600 dark:text-gray-200 justify-center items-center">
                    {navItems.map((link) => {
                        return (
                            <a
                                key={link.label}
                                href={link.url}
                                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-100"
                            >
                                {link.title}
                            </a>
                        )
                    })}
                </nav>
            </header>
    )
}
