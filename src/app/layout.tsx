import "./globals.css"
import Header from "@/components/sections/Header"
import { ThemeProvider } from "@/components/ui/theme-provider"
import Footer from "@/components/sections/Footer"
import { FlickeringGridBackGround } from "@/components/flickering-grid"

export const metadata = {
    title: "iverse.dev",
    description: "Software developer. Focused on nextjs and astro.",
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className=" w-full relative h-full bg-background px-4">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />

                    {children}
                    <hr className="max-w-2xl mx-auto my-3" />
                    <Footer />
                </ThemeProvider>
                <FlickeringGridBackGround />
            </body>
        </html>
    )
}
