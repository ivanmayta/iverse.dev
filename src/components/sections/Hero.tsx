import { type HeroData } from "@/types/about.type"
import es from "@/data/about.json"
import { Space_Grotesk } from "next/font/google"
const space = Space_Grotesk({
    weight: "variable",
    subsets: ["latin"],
    style: "normal",
})
export default async function Hero() {
    const { paragraphs } = es.hero as { paragraphs: HeroData["paragraphs"] }

    const p1 = paragraphs[0]
    const p2 = paragraphs[1]
    const p3 = paragraphs[2]
    const p4 = paragraphs[3]

    return (
        <section className="mx-auto  w-full max-w-2xl  content-center  pt-12  flex flex-col gap-2 text-lg text-zinc-600 dark:text-zinc-400">
            <h2
                className={`text-balance text-3xl font-bold text-zinc-800 dark:text-white pb-4 tracking-wide  ${space.className}`}
            >
                <span>Software developer</span>, currendly focused on the web
                with{" "}
                <span className=" font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#892be2c4]  to-[#ff0080d2]">
                    Astro
                </span>{" "}
                and{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white  to-zinc-600">
                    Next.js
                </span>
            </h2>
            <p className="block md:w-10/12">
                <strong>{p2.specialty}</strong>
                {`${p2.course}`}
            </p>
            <p>
                {p3.introduction}
                <strong>{p3.career}</strong>
                {p3.description}
            </p>
            <p>
                {p4.introduction}
                <strong>{p4.program}</strong>
            </p>
        </section>
    )
}
