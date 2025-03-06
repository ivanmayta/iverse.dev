import Projects from "@/components/sections/Projects"

export default function ProjectsPage() {
    return (
        <section className="w-full  max-w-2xl mx-auto flex flex-col items-center justify-center pt-14">
            <div>
                
                <img className="w-auto h-64 mx-auto" src="/chill-guy.webp" alt="Chill Guy Developer" />
            </div>
            <Projects />
        </section>
    )
}
