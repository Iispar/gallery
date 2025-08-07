import Image from "next/image"
import Link from "next/link"

export default function Header({ dropdown, handleDropdown }: {dropdown: boolean, handleDropdown: () => void}) {
    return (
        <>
            <div id="dropdown" className={`fixed top-0 bottom-0 left-0 right-0 bg-white flex-col gap-4 items-center justify-center
                ${dropdown ? 'flex' : 'hidden'}
            `}
            >
            <Link href="/" onNavigate={handleDropdown}>
                <p>
                    HOME
                </p>
            </Link>
            <Link href="all" onNavigate={handleDropdown}>
                <p>
                    ALL ART
                </p>
            </Link>
            <Link href="about" onNavigate={handleDropdown}>
                <p>
                    ABOUT ME
                </p>
            </Link>
            
            </div>
        
        <div className={`flex justify-end p-2
            `}>
            <Image id="burger" onClick={() => handleDropdown()} alt="burger" className="z-0" src={`${dropdown ? '/burger_close.png' : '/burger.PNG'}`} width={40} height={40}/>
        </div>
      </>
    )
}