import Picture from "./Picture";

export type AgendaEntry = {
    time: string;
    type: "single" | "multi" | "image" | "video";
    content: {title: string; speaker?: string;}[]
    imgSrc?: string;
    videoSrc?: string;
}

export default function AgendaItem(props:AgendaEntry){
    let classes = "font-sans flex flex-col gap-3 py-3 px-3 border border-zinc-800"

    if(props.type === "multi") classes += " sm:col-span-2"

    return(
        <div className={classes}>
            <p className="font-bold">{props.time}</p>
            {props.imgSrc && props.type === "image" ?
            <Picture
                src={props.imgSrc}
                src2x={props.imgSrc}
                alt=""
            />
            : ""}
            {props.videoSrc && props.type === "video" ?
            <video src={props.videoSrc} loop autoPlay muted></video>
            : ""}
            {props.content.map((contentItem, key) => (
                <div key={key}>
                    <h3>{contentItem.title}</h3>
                    {contentItem.speaker ?
                    <p className="text-zinc-400">{contentItem.speaker}</p>
                    : ""}
                </div>
            ))}
        </div>
    )
}