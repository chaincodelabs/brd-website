import Pill from "./Pill"

const headerMenu = [
    {
        name: 'Event',
        uri: '/#event'
    },
    {
        name: 'Format',
        uri: '/#format'
    },
    {
        name: 'Research Prize',
        uri: '/#prize'
    },
    {
        name: 'Agenda',
        uri: '/#agenda'
    }
]

export default function Header(){
    return(
        <header className="flex flex-col font-sans gap-2">
            <div className="flex flex-row justify-between w-full items-center p-6">
                <div className="flex flex-row gap-4 items-center w-full">
                    <a href="/" className="font-sans font-black !text-white text-3xl !no-underline">BRD<span className="text-rose-500">25</span></a>
                    <Pill text="Midtown NYC" uri="https://chaincode.com" />
                    
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.75 10.5A.75.75 0 0 1 3 9.75V3.752a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75V9.75a.75.75 0 0 1-.75.75h-6Zm10.5 0a.75.75 0 0 1-.75-.75V3.752a.75.75 0 0 1 .75-.75h5.998a.75.75 0 0 1 .75.75V9.75a.75.75 0 0 1-.75.75H14.25ZM3.75 21a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6Zm10.5 0a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h5.998a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H14.25Z"/>
                </svg>
            </div>
            <ul className="bg-black/20">
            {headerMenu.map((item, index) => (
                <li key={index}>
                    <a href={item.uri} className="!text-white !no-underline py-4 px-4 block hover:bg-black/20 active:bg-black/20">{item.name}</a>
                </li>
            ))}
            </ul>
        </header>
    )
}