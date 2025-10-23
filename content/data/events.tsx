type EventItem = {
    title: string;
    speaker: string;
    videoUrl?: string;
}

type Event = {
    year: string;
    events: EventItem[];
}


export const Events:Event[] = [
    {
        year: "2024",
        events: [
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
            {
                title: "MuSig2 and FROST",
                speaker: "Chelsea Komlo and Jonas Nick (Bitcoin research prize winners)",
                videoUrl: "https://www.youtube.com/watch?v=9j1smRr_Ebc"
            }
        ]
    },
    {
        year: "2023",
        events: [
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
                title: "Bitcoin's Latency–Security Analysis Made Simple",
                speaker: "Dongning Guo and Ling Ren",
                videoUrl: "https://www.youtube.com/watch?v=QH-7nQU7JTQ"
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
    }
]