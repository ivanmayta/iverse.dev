/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils"
import { IconLayoutNavbarCollapse } from "@tabler/icons-react"
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion"
import Link from "next/link"
import { useRef, useState } from "react"

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    )
}

const FloatingDockMobile = ({ items, className }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={cn("", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div layoutId="nav" className=" ">
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{
                                    delay: (items.length - 1 - idx) * 0.05,
                                }}
                            >
                                <Link
                                    href={item.href}
                                    key={item.title}
                                    className=""
                                >
                                    <div className="h-4 w-4">{item.icon}</div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button onClick={() => setOpen(!open)} className="">
                <IconLayoutNavbarCollapse className="" />
            </button>
        </div>
    )
}

const FloatingDockDesktop = ({ items, className }) => {
    let mouseX = useMotionValue(Infinity)
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn("mx-auto  md:flex  gap-4  ", className)}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    )
}

function IconContainer({ mouseX, title, icon, href }) {
    let ref = useRef(null)

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

        return val - bounds.x - bounds.width / 2
    })

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

    let widthTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20]
    )
    let heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20]
    )

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    })
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    })

    let widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    })
    let heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    })

    const [hovered, setHovered] = useState(false)

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 "
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className=""
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className=""
                >
                    {icon}
                </motion.div>
            </motion.div>
        </Link>
    )
}
