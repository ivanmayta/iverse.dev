"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

function CardImage({ images }) {
    const [rotations, setRotations] = useState(images.map(() => 0))

    useEffect(() => {
        setRotations(images.map(() => Math.random() * 20 - 10))
    }, [images])

    return (
        <div className="w-full md:w-[40%] mx-auto flex justify-center items-center">
            {images.map((image, idx) => (
                <motion.div
                    key={`image-${idx}`}
                    style={{
                        rotate: rotations[idx],
                    }}
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                    }}
                    whileTap={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                    }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                    <img
                        src={image}
                        alt={`bali image ${idx + 1}`}
                        width={500}
                        height={500}
                        className="rounded-lg h-40 w-40 object-cover flex-shrink-0"
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default CardImage
