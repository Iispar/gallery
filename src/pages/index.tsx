
import Card from "@/components/card";
import "../app/globals.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [paintingClicked, setPaintingClicked] = useState<boolean>(false)
  const [drowpDown, setdropDown] = useState<boolean>(false)
  const [closeImage, setCloseImage] = useState<boolean>(false)
  const images = ["/palm.jpg", "/jungle2.jpg", "/plants.jpg", "/three.jpg", "/blue.jpg", "/red.jpeg", "/duck.jpg"];

  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickClosePanelFromOutside = (e: any) => {
    console.log(e.target.id)
    console.log(drowpDown)
    if (drowpDown && e.target.id !== "burger" && e.target.id !== "dropdown" || e.target.id == null) {
        setdropDown(false);
        e.stopPropagation();
        e.preventDefault()
    }
  }

  useEffect(() => {
    setCloseImage(false)
  }, [paintingClicked])

  useEffect(() => {
      document.body.addEventListener("click", handleClickClosePanelFromOutside)
      return () => {
          document.body.removeEventListener("click", handleClickClosePanelFromOutside)
      }
  })

  const handleDropdown = () => {
    setdropDown(!drowpDown)
  }

  return (
    <>
      <div id="dropdown" className={`absolute -top-60 w-full h-50 bg-[url(/curtain.PNG)] bg-cover bg-bottom z-2 duration-300 flex flex-col items-center pt-14 pb-14 justify-around
        ${drowpDown ? 'translate-y-60' : 'translate-y-0'}
      `}
      >
        <div onClick={() => handleDropdown()} className="absolute top-5 h-1 rounded-lg w-60 bg-green-700" />
          <p >
            ART
          </p>
          <p>
            ABOUT ME
          </p>
        </div>
      
      <div className={`flex justify-end p-2 
          ${!drowpDown ? 'visible' : 'invisible'}
        `}>
        <Image id="burger" onClick={() => handleDropdown()} alt="burger" className="z-0" src={"/burger.PNG"} width={40} height={40}/>
      </div>
      <div className="flex flex-col justify-start align-start gap-3 p-5">
        {images.map((url, index) => (
          <Card closeImage={closeImage} dropdown={drowpDown} url={url} key={url} setPaintingClicked={setPaintingClicked} final={index + 1 == images.length} />
        ))}
        <div
        onClick={() => setCloseImage(true)}
          className={`
            absolute left-0 top-0 bottom-0 right-0 bg-black/20 backdrop-blur-xs
            transition-opacity duration-300 z-0
            ${paintingClicked ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        />
      </div>
    </>
  );
}
