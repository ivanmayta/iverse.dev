import "./globals.css"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/ui/theme-provider"
import Footer from "@/components/Footer"

export const metadata = {
    title: "iverse.dev",
    description: "Website personal de Ivan Mayta, desarrollador de software",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="px-8">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
