import FlickeringGrid from "./ui/fleckering-bg"

export function FlickeringGridBackGround() {
    return (
        <FlickeringGrid
            className="-z-10 absolute inset-0 size-full min-h-screen"
            squareSize={0.5}
            gridGap={8}
            color="#6B7280"
            maxOpacity={1}
            flickerChance={2}
        />
    )
}
