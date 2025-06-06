import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: "iverse.dev",
    description: "iverse.dev",
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className="antialiased flex flex-col max-w-2xl mx-auto  min-h-screen px-4 sm:px-0">
                <Header />
                <main className="flex flex-col flex-1 ">{children}</main>
                <Footer />
                <img
                    src="/logo.svg"
                    alt="iverse.dev"
                    className="absolute top-0 left-0 w-screen h-screen opacity-25 -z-50 brightness-10"
                />
            </body>
        </html>
    )
}
