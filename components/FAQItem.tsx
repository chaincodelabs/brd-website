interface FAQItemProps {
    question: string;
    answer: string;
    open: boolean;
}

export default function FAQItem(props:FAQItemProps){
    return(
        <div className="bg-black p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h3>{props.question}</h3>
                {props.open ? (
                    <div className="minus">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="5" fill="none" viewBox="0 0 12 5">
                        <rect width="11.71" height="3.809" y=".809" fill="#FB6A5B" opacity=".8" rx="1.904"/>
                        </svg>
                    </div>
                ) : (
                    <div className="plus">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none" viewBox="0 0 18 19">
                        <rect width="18" height="3" y="8.117" fill="#FB6A5B" opacity=".8" rx="1.5"/>
                        <rect width="18" height="3" x="10.5" y=".617" fill="#FB6A5B" opacity=".8" rx="1.5" transform="rotate(90 10.5 .617)"/>
                        </svg>
                    </div>
                )}
            </div>
            {props.open && (
                <p className="text-zinc-400">{props.answer}</p>
            )}
        </div>
    )
}
