import Link from "next/link"

export function Footer() {
    return (
        <footer className="mt-autorow-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
            >
                iverse.dev
            </Link>
        </footer>
    )
}
