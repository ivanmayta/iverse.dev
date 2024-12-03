import Marquee from "@/components/ui/marquee"

export function Marquee3D({ images }) {
    return (
        <div className="w-full md:w-[40%] relative ">
            <div className="relative overflow-hidden w-full ">
                {/* Contenedor con gradientes */}
                <div className="absolute inset-0 pointer-events-none ">
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
                </div>
                <Marquee className="mx-auto flex justify-center items-center">
                    {images.map((image, idx) => (
                        <img
                            key={idx}
                            src={image}
                            alt={`Imagen de proyecto ${idx + 1}`}
                            className="rounded-lg h-40  object-cover flex-shrink-0 aspect-video"
                        />
                    ))}
                    <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-30"></div>
                </Marquee>
                {/* Marquee */}
            </div>
        </div>
    )
}
