export interface HeroData {
    paragraphs: [
        GreetingParagraph,
        SpecialtyParagraph,
        IntroductionCareerParagraph,
        ProgramParagraph
    ]
}

interface GreetingParagraph {
    greeting: string
    tobe: string
    name: string
}

interface SpecialtyParagraph {
    specialty: string
    course: string
}

interface IntroductionCareerParagraph {
    introduction: string
    career: string
    description: string
}

interface ProgramParagraph {
    introduction: string
    program: string
}
