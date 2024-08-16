import Image from "next/image"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Hero /> 
            <Projects />
            <article>Personal data</article>
            <article>Projects</article>
            <article>Projects</article>
        </main>
    )
}
