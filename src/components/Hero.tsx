import { type HeroData } from "@/types/about.type"
import es from "@/data/about.json"

export default async function Hero() {
    const { paragraphs } = es.hero as { paragraphs: HeroData["paragraphs"] }

    const p1 = paragraphs[0]
    const p2 = paragraphs[1]
    const p3 = paragraphs[2]
    const p4 = paragraphs[3]

    return (
        <section className="mx-auto w-full max-w-3xl  content-center  pt-12 flex flex-col gap-2 pb-4 opacity-80 text-foreground/80">
            <p className="text-balance tracking-wide leading-normal">
                {`${p1.greeting} ${p1.tobe} `}
                <strong className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-left after:scale-x-0 after:animate-[expand_0.5s_ease-in-out_forwards]">
                    {p1.name}
                </strong>
            </p>
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
            <div className=" font-medium inline-flex items-center gap-2 animate-shine bg-[linear-gradient(110deg,#939393,45%,#1e2631,55%,#939393)] bg-[length:200%_100%] text-transparent bg-clip-text">
                <span className="relative flex h-[0.7em] w-[0.7em]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 animate-duration-[1000ms]"></span>
                    <span className="relative inline-flex h-[0.7em] w-[0.7em] rounded-full bg-green-500"></span>
                </span>
                Disponible
            </div>
        </section>
    )
}
