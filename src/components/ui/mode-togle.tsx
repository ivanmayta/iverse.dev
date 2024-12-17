"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <button
            onClick={toggleTheme}
            aria-label={`Cambiar a tema ${
                theme === "light" ? "oscuro" : "claro"
            }`}
        >
            {theme === "light" ? (
                <Moon className="opacity-60 hover:opacity-100 transition ease-ou" />
            ) : (
                <Sun className=" opacity-60 hover:opacity-100 transition ease-ou" />
            )}
        </button>
    )
}
