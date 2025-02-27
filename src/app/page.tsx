import Hero from "@/components/sections/Hero"
import { Elsewhere } from "@/components/sections/Elsewhere"
import Projects from "@/components/sections/Projects"
import Contributions from "@/components/sections/Contributions"

export default function Home() {
    return (
        <main className="space-y-8">
            <Hero />
            <Elsewhere />
            <Projects />
            <Contributions />
        </main>
    )
}
