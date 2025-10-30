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
            {title: "Featured Report-Out from BRW25", speaker: "That famous Alice"}
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
        time: "12:30 - 14:15 EDT",
        type: "single",
        content: [{title: "Lunch Break", speaker: ""}]
    },
    {
        time: "14:15 - 15:20 EDT",
        type: "multi",
        content: [
            {title: "Bitcoin Scaling", speaker: "Neha Narula"},
            {title: "Ark and Research Challenges", speaker: "Veronika Knuett"},
            {title: "Featured Report-Outs from BRW25", speaker: "That really well known Bob"}
        ]
    },
    {
        time: "15:20 - 15:40 EDT",
        type: "single",
        content: [{title: "Coffee Break", speaker: ""}]
    },
    {
        time: "15:40 - 16:40 EDT",
        type: "single",
        content: [{title: "Bitcoin research prize ceremony and talk", speaker: "Secret Speaker(s)"}]
    },
    {
        time: "16:40 - 16:50 EDT",
        type: "single",
        content: [{title: "Closing Remarks", speaker: "Clara Shikhelman & Sergi Delgado"}]
    },
    {
        time: "16:50 - 18:00 CET EDT",
        type: "single",
        content: [{title: "Happy Hour", speaker: ""}]
    }
]