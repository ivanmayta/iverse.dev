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
            <body className="antialiased flex flex-col max-w-2xl mx-auto  min-h-screen">
                <Header />
                <main className="flex flex-col flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
