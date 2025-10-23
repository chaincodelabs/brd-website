type Speaker = {
    name: string;
    title?: string;
    organization?: string;
    imgSrc: string;
    imgSrc2x: string;
    link?: string;
}

export const Speakers:Speaker[] = [
    {
        name: "Aviv Zohar",
        // title: "Professor",
        organization: "The Hebrew University",
        imgSrc: "/speakers/aviv-zohar.webp",
        imgSrc2x: "/speakers/aviv-zohar@2x.webp",
        link: "https://x.com/Avivz78"
    },
    {
        name: "b10c",
        // title: "Bitcoin Core Contributor",
        organization: "Bitcoin Core",
        imgSrc: "/speakers/b10c.webp",
        imgSrc2x: "/speakers/b10c@2x.webp",
        link: "https://x.com/0xB10C"
    },
    {
        name: "Neha Narula",
        // title: "Director of Digital Currency",
        organization: "MIT Media Lab",
        imgSrc: "/speakers/neha-narula.webp",
        imgSrc2x: "/speakers/neha-narula@2x.webp",
        link: "https://x.com/neha"
    },
    {
        name: "Veronika Kuett",
        // title: "Researcher",
        organization: "Ark Labs",
        imgSrc: "/speakers/veronika-kuett.webp",
        imgSrc2x: "/speakers/veronika-kuett@2x.webp",
        link: "https://x.com/VeronikaKuett"
    },
]