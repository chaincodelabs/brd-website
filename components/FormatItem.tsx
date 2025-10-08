import Picture from "./Picture";

interface FormatItemProps {
    number?: number;
    title: string;
    description: string;
    src: string;
    src2x: string;
    alt: string;
    className?: string;
}

export default function FormatItem(props:FormatItemProps){
    let classes = "p-3 flex flex-col gap-3 border border-solid border-zinc-500 h-full lg:h-auto" + (props.className ? " " + props.className : "");

    return(
        <div className={classes}>
            <div className="aspect-[264/280] w-full relative">
                <span className="absolute top-4 left-4 font-sans font-bold text-4xl">{props.number}</span>
                <Picture 
                    src={props.src}
                    src2x={props.src2x}
                    alt={props.alt}
                    className={''}
                />
            </div>
            <h3 className="uppercase underline">{props.title}</h3>
            <p className="text-zinc-500">{props.description}</p>
        </div>
    )
}