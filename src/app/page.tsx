import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Network } from "@/components/network"
import Contributions from "@/components/contributions"
export default async function Home() {
    return (
        <>
            <About />
            <Network />
            <Projects />
            <Contributions />
        </>
    )
}
