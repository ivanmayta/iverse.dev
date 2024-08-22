import Hero from "@/components/Hero"
import Projects from "@/components/Projects"


export default function Home() {
    return (
        <main className="z-0  space-y-36 pt-16 lg:space-y-48">
            <Hero className="" />
            <Projects
                id="proyectos"
                className="mx-auto max-w-screen-lg content-center px-4 xs:px-6 sm:px-8 "
            />
            <article>Personal data</article>
            <article>Projects</article>
            <article>Projects</article>
        </main>
    )
}
