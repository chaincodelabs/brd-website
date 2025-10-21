type Speaker = {
    name: string;
    title: string;
    organization: string;
    imgSrc: string;
    imgSrc2x: string;
}

export const Speakers:Speaker[] = [
    {
        name: "Alice Speaker",
        title: "Researcher",
        organization: "Awesome University",
        imgSrc: "/speakers/alice.webp",
        imgSrc2x: "/speakers/alice@2x.webp",
    },
    {
        name: "Bob Speaker",
        title: "Engineer",
        organization: "BOSS Accelerator",
        imgSrc: "/speakers/bob.webp",
        imgSrc2x: "/speakers/bob@2x.webp",
    },
    {
        name: "Charlotte Speaker",
        title: "Data Scientist",
        organization: "Radical University",
        imgSrc: "/speakers/charlotte.webp",
        imgSrc2x: "/speakers/charlotte@2x.webp",
    },
    {
        name: "David Speaker",
        title: "Researcher",
        organization: "Independent",
        imgSrc: "/speakers/david.webp",
        imgSrc2x: "/speakers/david@2x.webp",
    },
]