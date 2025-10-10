interface FAQItemProps {
    question: string;
    answer: string;
    open: boolean;
    onClick: () => void;
}

export default function FAQItem(props:FAQItemProps){
    return(
        <div 
            className="bg-black p-6 flex flex-col gap-4 cursor-pointer hover:bg-gray-900 transition-colors"
            onClick={props.onClick}
        >
            {props.open ? (
                <div className="minus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <rect width="11.71" height="3.809" x="6" y="10" fill="#FB6A5B" opacity=".8" rx="1.904"/>
                    </svg>
                </div>
            ) : (
                <div className="plus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <rect width="18" height="3" x="3" y="10.5" fill="#FB6A5B" opacity=".8" rx="1.5"/>
                    <rect width="18" height="3" x="13.5" y="3" fill="#FB6A5B" opacity=".8" rx="1.5" transform="rotate(90 13.5 3)"/>
                    </svg>
                </div>
            )}
            <div className="flex items-center justify-between">
                <h3>{props.question}</h3>
            </div>
            {props.open && (
                <p className="text-zinc-400">{props.answer}</p>
            )}
        </div>
    )
}
