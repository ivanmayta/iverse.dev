import Hero from "@/components/sections/Hero"
import { Elsewhere } from "@/components/sections/Elsewhere"
import Projects from "@/components/sections/Projects"

export default function Home() {
    return (
        <main className="flex flex-col  gap-6 min-w-[320px] ">
            <Hero />
            <Elsewhere />
            <Projects />
        </main>
    )
}
