interface PillProps {
    text: string;
    uri?: string;
    color?: "black" | "red";
}

export default function Pill(props:PillProps){
    let bgColor = "bg-black/75";

    if(props.color) {
        switch (props.color) {
            case "red":
                bgColor = "bg-rose-700/75";
            case "black":
                bgColor = `bg-black/75`;      
        }
    }

    const styling = `${bgColor} rounded-full px-4 py-2 font-sans !text-white text-nowrap`

    if(props.uri) {
        return(
            <a href={props.uri} className={styling}>
                {props.text}
            </a>
        )
    }
    
    return(
        <span className={styling}>
            {props.text}
        </span>
    )
}