import FlickeringGrid from "./ui/fleckering-bg"

export function FlickeringGridBackGround() {
    return (
        <FlickeringGrid
            className="-z-10 absolute inset-0 size-full"
            squareSize={2}
            gridGap={8}
            color="#6B7280"
            maxOpacity={0.2}
            flickerChance={0.3}
        />
    )
}
