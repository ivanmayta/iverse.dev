import Hero from "@/components/Hero"
import Projects from "@/components/Projects"

export default function Home() {
    return (
        <main className="flex flex-col  gap-6 min-w-[320px] ">
            <Hero />
            <hr className="w-14 mx-auto m-0 p-0" />
            <Projects />
        </main>
    )
}
