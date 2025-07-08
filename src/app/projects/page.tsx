import { Projects } from "@/components/projects"
import { Technologies } from "@/components/technologies"
export default function ProjectsPage() {
    return (
        <section className="flex flex-col gap-4">
            <Technologies />
            <Projects />
        </section>
    )
}
