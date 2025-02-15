import FlickeringGrid from "./ui/fleckering-bg"

export function FlickeringGridBackGround() {
    return (
        <FlickeringGrid
            className="-z-10 absolute inset-0 size-full min-h-screen"
            squareSize={0.9}
            gridGap={7}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={2}
        />
    )
}
