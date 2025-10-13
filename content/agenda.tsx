import type { AgendaEntry } from "@/components/AgendaItem";

export const Agenda:AgendaEntry[] = [
    {
        time: "9:00 EDT",
        type: "single",
        content: [{title: "Welcome", speaker: "TBD"}]
    },
    {
        time: "10:00 - 10:15 CET EDT",
        type: "single",
        content: [{title: "Opening remarks", speaker: "TBD"}]
    },
    {
        time: "10:15 - 11:20 EDT",
        type: "multi",
        content: [
            {title: "TBD", speaker: "TBD"},
            {title: "TBD", speaker: "TBD"},
            {title: "TBD", speaker: "TBD"}
        ]
    },
    {
        time: "11:20 - 11:40 EDT",
        type: "video",
        content: [{title: "Coffee Break"}],
        videoSrc: "/coffee.webm"
    },
    {
        time: "11:40 - 12:30 EDT",
        type: "single",
        content: [{title: "TBD", speaker: "TBD"}]
    },
    {
        time: "11:20 - 11:40 EDT",
        type: "video",
        content: [{title: "Lunch Break"}],
        videoSrc: "/lunch.webm"
    },
    {
        time: "14:15 - 15:40 EDT",
        type: "multi",
        content: [
            {title: "TBD", speaker: "TBD"},
            {title: "TBD", speaker: "TBD"},
            {title: "TBD", speaker: "TBD"}
        ]
    },
    {
        time: "15:40 - 16:40 EDT",
        type: "single",
        content: [{title: "TBD", speaker: "TBD"}]
    },
    {
        time: "16:40 - 16:50 EDT",
        type: "single",
        content: [{title: "Talk Title", speaker: "TBD"}]
    },
    {
        time: "11:20 - 11:40 CET EDT",
        type: "video",
        content: [{title: "Happy Hour"}],
        videoSrc: "/coffee.webm"
    }
]