interface BadgeAncoresProps {
    icon: React.ReactNode | string
    url: string
}

export default function BadgeAncores({ icon, url }: BadgeAncoresProps) {


    const isExternal = url.includes("http")
    console.log(isExternal)

    return (
        <a
            className=" flex gap-1 border py-1 px-3 rounded-2xl items-center hover:underline"
            href={isExternal ? url : `https://${url}`}
            target="_blank"
        >
            {icon} {url}
        </a>
    )
}
