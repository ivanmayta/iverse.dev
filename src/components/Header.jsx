export default function Header() {
    const navItems = [
        {
            title: "Experiencia",
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
            url: "mailto:miduga@gmail.com",
        },
    ]
    return (
        <header className="fixed top-0 z-20 flex items-center justify-center w-full mx-auto mt-2">
            <nav className="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
                {navItems.map((link) => {
                    return (
                        <a
                            key={link.label}
                            href={link.url}
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-100 rounded-full"
                        >
                            {link.title}
                        </a>
                    )
                })}
            </nav>
        </header>
    )
}
