interface PillProps {
    text: string;
    uri?: string;
    color?: "black" | "red";
    icon?: string;
}

export default function Pill(props:PillProps){
    let bgColor = "bg-black/85";

    if(props.color) {
        switch (props.color) {
            case "red":
                bgColor = "bg-[#4C2324]";
                break;
            case "black":
                bgColor = `bg-black/75`;
                break;
        }
    }

    const styling = `${bgColor} text-base rounded-full px-4 py-2 font-sans !text-white text-nowrap w-auto inline-block`

    const content = (
        <span className="flex flex-row items-center gap-2">
            {props.icon && (
                <img src={props.icon} alt="" className="w-4 h-4" />
            )}
            {props.text}
        </span>
    )

    if(props.uri) {
        return(
            <a href={props.uri} className={styling}>
                {content}
            </a>
        )
    }
    
    return(
        <div className={styling}>
            {content}
        </div>
    )
}