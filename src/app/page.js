import Image from "next/image"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-between ">
            <Hero />
            <Projects className="w-full max-w-3xl mx-auto" />
            <article>Personal data</article>
            <article>Projects</article>
            <article>Projects</article>
        </main>
    )
}
