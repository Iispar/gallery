import Image from "next/image"
export default function About() {
    return (

        <div className="bg-gray-200 absolute top-20 left-6 right-6 bottom-10 shadow-xs shadow-black p-5">

            <div className="flex flex-col relative h-full">
                <Image 
                    src={"/hi.PNG"}
                    alt="hi"
                    width={100}
                    height={100}
                    className="mb-5"
                />
                <div className="px-2 text-justify tracking-widest" style={{wordSpacing: "10px"}}>
                    <span className="font-light text-xl">
                        I&apos;m Iiro and this is my personal gallery of
                        artworks that I have and will create in the future.
                        Art is something I enjoy doing in my free time, but
                        by profession I am a software engineer. If there is
                        some need to contact me, you can reach me by email.
                        Please also check out my github :)
                    </span>
                </div>
                <div className="absolute bottom-0 text-right tracking-widest" style={{wordSpacing: "10px"}}>
                    <span className="font-normal text-blue-700">
                        iiro.s.partanen@gmail.com
                        github.com/iispar
                    </span>
                </div>
            </div>
            
     
        </div>
    )
}