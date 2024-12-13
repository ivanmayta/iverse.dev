export interface SocialLinks {
    socialsLinks: SocialLink[]
}

interface SocialLink {
    network: string
    username: string
    url: string
}
