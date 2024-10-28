import Hero from "@/components/Hero"
import Projects from "@/components/Projects"

export default function Home() {
    return (
        <main className="flex flex-col  gap-12 min-w-[320px] ">
            <Hero />
            {/*<Projects2
                id="proyectos"
                className="mx-auto max-w-screen-lg content-center px-4 xs:px-6 sm:px-8 "
            />*/}
            <Projects
                className="mx-auto max-w-3xl content-center "
                title="Proyectos"
            />
        </main>
    )
}
