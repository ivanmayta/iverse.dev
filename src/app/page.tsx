import Hero from "@/components/sections/Hero"
import { Elsewhere } from "@/components/sections/Elsewhere"
import Projects from "@/components/sections/Projects"

export default function Home() {
    return (
        <main className="space-y-8">
            <Hero />
            <Elsewhere />
            <Projects />
        </main>
    )
}
