export type EventItem = {
    title: string;
    speaker: string;
    videoUrl?: string;
    prize?: string;
}

export type Event = {
    year: string;
    events: EventItem[];
}

export const Events:Event[] = [
        {
        year: "2025",
        events: [
            {
                title: "BitVM2: Bridging Bitcoin to Second Layers",
                speaker: "Robin Linus",
                videoUrl: "xxxx",
                prize: "Bitcoin Research Prize"
            },
            {
                title: "Failing Productively",
                speaker: "Aviv Zohar",
            },
            {
                title: "Monitoring Bitcoin’s P2P network",
                speaker: "b10c",
            },
            {
                title: "Featured Report-Out from BRW25 - 01",
                speaker: "That famous Alice",
            },
            {
                title: "Bitcoin Scaling",
                speaker: "Neha Narula",
            },
            {
                title: "Ark and Research Challenges",
                speaker: "Veronika Knuett",
            },
            {
                title: "Featured Report-Outs from BRW25 - 02",
                speaker: "That really well known Bob",
            },
        ]
    },
    {
        year: "2024",
        events: [
            {
                title: "MuSig2 and FROST",
                speaker: "Chelsea Komlo and Jonas Nick",
                videoUrl: "https://www.youtube.com/watch?v=9j1smRr_Ebc",
                prize: "Bitcoin Research Prize"
            },
            {
                title: "De-anonymization in Bitcoin",
                speaker: "Sarah Meiklejohn",
            },
            {
                title: "Privacy and Scaling with zk-SNARKs and Client-Side Validation",
                speaker: "Jonas Nick",
            },
            {
                title: "Combining Cryptographic Protocol",
                speaker: "Josie Baker",
            },
            {
                title: "Strategic Latency Reduction in Blockchain Peer-to-Peer Networks",
                speaker: "Guilia Fanti",
            },
            {
                title: "Lighting Pathfinding Privacy and Reliability",
                speaker: "Matt Corallo",
            },
            {
                title: "Modeling Aspects of the Bitcoin Universe",
                speaker: "Hannes Hartenstein and Matthias Grundmann",
            },
        ]
    },
    {
        year: "2023",
        events: [
            {
                title: "Bitcoin's Latency–Security Analysis Made Simple",
                speaker: "Dongning Guo and Ling Ren",
                videoUrl: "https://www.youtube.com/watch?v=QH-7nQU7JTQ",
                prize: "Bitcoin Research Prize"
            },
            {
                title: "Network Security for Blockchain networks",
                speaker: "Maria Apostolaki",
                videoUrl: "https://www.youtube.com/watch?v=Grp-uzTRB2M"
            },
            {
                title: "Bitcoin Core - P2P in practice",
                speaker: "Martin Zumsande",
                videoUrl: "https://www.youtube.com/watch?v=dWCPeiIzVco"
            },
            {
                title: "An Exploration of Bitcoin's P2P Network and its Security",
                speaker: "Ethan Heilman",
                videoUrl: "https://www.youtube.com/watch?v=32du0sviq0g"
            },
            {
                title: "Cluster Mempool - Fixing Relay of Dependent Transactions",
                speaker: "Pieter Wuille",
                videoUrl: "https://www.youtube.com/watch?v=X0pLi9WH3JY"
            },
            {
                title: "From paper to BIP",
                speaker: "Mark Erhardt",
                videoUrl: "https://www.youtube.com/watch?v=7wZaL3VC2Nw"
            },
            {
                title: "Fast batched asynchronous distributed key generation",
                speaker: "Victor Shoup",
                videoUrl: "https://www.youtube.com/watch?v=dc2ctAC7UPE"
            },
            {
                title: "From paper to BOLT",
                speaker: "Carla Kirk-Cohen",
                videoUrl: "https://www.youtube.com/watch?v=l5JgXwUWAuw"
            },
            {
                title: "Recent developments in (Bitcoin compatible) zk-SNARKs",
                speaker: "Benedikt Bünz",
                videoUrl: "https://www.youtube.com/watch?v=6YBp1xbQV8o"
            }
        ]
    },
    // {
    //     year: "20XX",
    //     events: [
    //         {
    //             title: "Title of Eent",
    //             speaker: "Speaker Name",
    //         },
    //     ]
    // },
    // {
    //     year: "20XY",
    //     events: [
    //         {
    //             title: "Title of Eent",
    //             speaker: "Speaker Name",
    //         },
    //     ]
    // },
    // {
    //     year: "20XZ",
    //     events: [
    //         {
    //             title: "Title of Eent",
    //             speaker: "Speaker Name",
    //         },
    //     ]
    // },
]