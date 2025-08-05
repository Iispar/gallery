import Image from "next/image"
import Link from "next/link"

export default function Header({ dropDown, handleDropdown }) {
    return (
        <>
            <div id="dropdown" className={`absolute -top-60 w-full h-50 bg-[url(/curtain.PNG)] bg-cover bg-bottom z-2 duration-300 flex flex-col items-center pt-14 pb-14 justify-around
                ${dropDown ? 'translate-y-60' : 'translate-y-0'}
            `}
            >
            <div onClick={() => handleDropdown()} className="absolute top-5 h-1 rounded-lg w-60 bg-green-700" />
            <Link href="/">
                <p>
                    HOME
                </p>
            </Link>
            <Link href="all">
                <p>
                    ART
                </p>
            </Link>
            <Link href="about">
                <p>
                    ABOUT ME
                </p>
            </Link>
            
            </div>
        
        <div className={`flex justify-end p-2 
            ${!dropDown ? 'visible' : 'invisible'}
            `}>
            <Image id="burger" onClick={() => handleDropdown()} alt="burger" className="z-0" src={"/burger.PNG"} width={40} height={40}/>
        </div>
      </>
    )
}