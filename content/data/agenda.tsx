import type { AgendaEntry } from "@/components/AgendaItem";

export const Agenda:AgendaEntry[] = [
    {
        time: "9:00 EDT",
        type: "single",
        content: [{title: "Doors open", speaker: ""}]
    },
    {
        time: "10:00 - 10:15 EDT",
        type: "single",
        content: [{title: "Opening remarks", speaker: "Sergi Delgado"}]
    },
    {
        time: "10:15 - 11:20 EDT",
        type: "multi",
        content: [
            {title: "QCAP: A Bitcoin-Native Quantum Canary Alert", speaker: "Ghazaleh Keshavarzkalhori"},
            {title: "Iceberg: Nested Signing for Lightning", speaker: "Jesse Posner"},
            {title: "Native SNARK verification on Bitcoin", speaker: "Robin Linus"}
        ]
    },
    {
        time: "11:20 - 11:40 EDT",
        type: "single",
        content: [{title: "Coffee Break", speaker: ""}]
    },
    {
        time: "11:40 - 12:30 EDT",
        type: "single",
        content: [{title: "Group Session", speaker: ""}]
    },
    {
        time: "12:30 - 13:30 EDT",
        type: "single",
        content: [{title: "Lunch Break", speaker: ""}]
    },
    {
        time: "13:30 - 14:35 EDT",
        type: "multi",
        content: [
            {title: "State of the Ark", speaker: "Steven Rose"},
            {title: "Shielded Bitcoin: Private Bitcoin Transactions via PIPEs v2", speaker: "Misha Komarov"},
            {title: "Isoge-what? (An introduction to Isogeny-based PQ cryptography)", speaker: "Nadav Kohen"}
        ]
    },
    {
        time: "14:35 - 14:55 EDT",
        type: "single",
        content: [{title: "Coffee Break", speaker: ""}]
    },
    {
        time: "14:55 - 15:55 EDT",
        type: "single",
        content: [{title: "Bitcoin Research Prize Talk: TBD", speaker: "TBD"}]
    },
    {
        time: "15:55 - 16:05 EDT",
        type: "single",
        content: [{title: "Closing Remarks", speaker: "Sergi Delgado"}]
    },
    {
        time: "16:05 - 18:00 CET EDT",
        type: "single",
        content: [{title: "Happy Hour", speaker: ""}]
    }
]