import Hero from "@/components/Hero"
import Projects from "@/components/Projects"

export default function Home() {
    return (
        <main className={` space-y-36 pt-16 lg:space-y-48`}>
            <Hero />
            {/*<Projects2
                id="proyectos"
                className="mx-auto max-w-screen-lg content-center px-4 xs:px-6 sm:px-8 "
            />*/}
            <Projects
                className="mx-auto max-w-screen-lg content-center px-4 xs:px-6 sm:px-8"
                title="Proyectos"
            />
        </main>
    )
}
