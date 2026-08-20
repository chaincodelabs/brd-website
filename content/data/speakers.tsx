type Speaker = {
    name: string;
    title?: string;
    organization?: string;
    imgSrc: string;
    imgSrc2x: string;
    link?: string;
    prize?: string;
}

export const Speakers:Speaker[] = [
    {
        name: "Ghazaleh Keshavarzkalhori",
        // title: "PhD candidate",
        organization: "Autonomous University of Barcelona",
        imgSrc: "/speakers/ghazaleh-keshavarzkalhori.webp",
        imgSrc2x: "/speakers/ghazaleh-keshavarzkalhori@2x.webp",
        link: "https://x.com/0xgazelle"
    },        {
        name: "Jesse Posner",
        // title: "CEO",
        organization: "Vora",
        imgSrc: "/speakers/jesse-posner.webp",
        imgSrc2x: "/speakers/jesse-posner.webp",
        link: "https://x.com/jesseposner"
    },
        {
        name: "Robin Linus",
        // title: "PhD candidate",
        organization: "Stanford University",
        imgSrc: "/speakers/robin-linus.webp",
        imgSrc2x: "/speakers/robin-linus@2x.webp",
        link: "https://x.com/robin_linus"
    },
    {
        name: "Steven Roose",
        // title: "CEO",
        organization: "Second",
        imgSrc: "/speakers/steven-roose.webp",
        imgSrc2x: "/speakers/steven-roose@2x.webp",
        link: "https://x.com/stevenroose3"
    },
    {
        name: "Misha Komarov",
        // title: "Co-founder",
        organization: "[[alloc] init]",
        imgSrc: "/speakers/misha-komarov.webp",
        imgSrc2x: "/speakers/misha-komarov@2x.webp",
        link: "https://x.com/nemothenoone"
    },
        {
        name: "Nadav Kohen",
        // title: "Researcher",
        organization: "Chaincode Labs",
        imgSrc: "/speakers/nadav-kohen.webp",
        imgSrc2x: "/speakers/nadav-kohen@2x.webp",
        link: "https://x.com/nadav_kohen"
    },
    // Prize winner TBD — set `prize` on the entry to show the trophy badge
]