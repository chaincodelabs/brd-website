import Picture from "./Picture";

export type AgendaEntry = {
    time: string;
    type: "single" | "multi" | "image" | "video";
    content: {title: string; speaker?: string;}[]
    imgSrc?: string;
    videoSrc?: string;
}

export default function AgendaItem(props:AgendaEntry){
    let classes = "font-sans grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 px-3 border border-zinc-800 justify-between"

    if(props.type === "multi") classes += ""

    return(
        <div className={classes}>
            <p className="font-bold text-xl">{props.time}</p>
            <div className="flex flex-col gap-3">
                {props.content.map((contentItem, key) => (
                    <div key={key}>
                        <h3 className="text-xl">{contentItem.title}</h3>
                        {contentItem.speaker ?
                        <p className="text-zinc-400">{contentItem.speaker}</p>
                        : ""}
                    </div>
                ))}
            </div>
        </div>
    )
}