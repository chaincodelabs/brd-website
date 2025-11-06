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
        content: [{title: "Opening remarks", speaker: "Clara Shikhelman & Sergi Delgado"}]
    },
    {
        time: "10:15 - 11:20 EDT",
        type: "multi",
        content: [
            {title: "Failing Productively", speaker: "Aviv Zohar"},
            {title: "Monitoring Bitcoin’s P2P network", speaker: "b10c"},
            {title: "Nested Threshold Signing for Lightning", speaker: "Jesse Posner"}
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
        content: [{title: "Group Session: Collaborative exploration", speaker: ""}]
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
            {title: "Bitcoin Scaling", speaker: "Neha Narula"},
            {title: "Ark and Research Challenges", speaker: "Veronika Knuett"},
            {title: "P2P attacks on Bitcoin: Overview and Next Steps", speaker: "Constantine Doumanidis"}
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
        content: [{title: "Bitcoin Research Prize Talk: BitVM2 - Bridging Bitcoin to Second Layers", speaker: "Robin Linus"}]
    },
    {
        time: "15:55 - 16:05 EDT",
        type: "single",
        content: [{title: "Closing Remarks", speaker: "Clara Shikhelman & Sergi Delgado"}]
    },
    {
        time: "16:05 - 18:00 CET EDT",
        type: "single",
        content: [{title: "Happy Hour", speaker: ""}]
    }
]