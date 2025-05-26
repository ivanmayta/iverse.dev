import { Projects } from "@/components/projects"
import { Technologies } from "@/components/technologies"
export default function ProjectsPage() {
    return (
        <main className="flex flex-col gap-4">
            <Technologies />
            <Projects />
        </main>
    )
}
