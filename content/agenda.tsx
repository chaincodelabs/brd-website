import type { AgendaEntry } from "@/components/AgendaItem";

export const Agenda:AgendaEntry[] = [
    {
        time: "9:00 EDT",
        type: "single",
        content: [{title: "Welcome and Opening Remarks", speaker: "All the guests are welcomed."}]
    },
    {
        time: "10:00 - 10:15 CET EDT",
        type: "single",
        content: [{title: "Opening remarks", speaker: "Clara Shikhelman and Sergi Delgado"}]
    },
    {
        time: "10:15 - 11:20 EDT",
        type: "multi",
        content: [
            {title: "De-anonymization in Bitcoin", speaker: "Sarah Meiklejohn"},
            {title: "Privacy and Scaling with zk-SNARKs and Client-Side Validation", speaker: "Jonas Nick"},
            {title: "Combining Cryptographic Protocols", speaker: "Josie Baker"}
        ]
    },
    {
        time: "11:20 - 11:40 EDT",
        type: "image",
        content: [{title: "Coffee Break"}],
        imgSrc: "/coffee.png"
    },
    {
        time: "11:40 - 12:30 EDT",
        type: "single",
        content: [{title: "Bitcoin Development Discussion", speaker: "Group Session"}]
    },
    {
        time: "11:20 - 11:40 EDT",
        type: "image",
        content: [{title: "Lunch Break"}],
        imgSrc: "/lunch.png"
    },
    {
        time: "14:15 - 15:40 EDT",
        type: "multi",
        content: [
            {title: "Strategic Latency Reduction in Blockchain Peer-to-Peer Networks", speaker: "Guilia Fanti"},
            {title: "Lighting Pathfinding Privacy and Reliability", speaker: "Matt Corallo"},
            {title: "Modeling Aspects of the Bitcoin Universe", speaker: "Hannes Hartenstein and Matthias Grundmann"}
        ]
    },
    {
        time: "15:40 - 16:40 EDT",
        type: "single",
        content: [{title: "MuSig2 and FROST", speaker: "Chelsea Komlo and Jonas Nick (Bitcoin research prize winners)"}]
    },
    {
        time: "16:40 - 16:50 EDT",
        type: "single",
        content: [{title: "Closing remarks", speaker: "Clara Shikhelman and Sergi Delgado"}]
    },
    {
        time: "11:20 - 11:40 CET EDT",
        type: "image",
        content: [{title: "Happy Hour"}],
        imgSrc: "/coffee.png"
    }
]