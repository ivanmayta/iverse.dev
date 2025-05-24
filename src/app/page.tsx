import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Network } from "@/components/network"
export default async function Home() {
    return (
        <>
            <About />
            <Network />
            <Projects />
        </>
    )
}
