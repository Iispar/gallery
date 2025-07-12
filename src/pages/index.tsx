
import Card from "@/components/card";
import "../app/globals.css";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [paintingClicked, setPaintingClicked] = useState<boolean>()
  const images = ["/palm.jpg", "/jungle2.jpg", "/three.jpg", "/blue.jpg", "/red.jpeg", "/duck.jpg","/palm.jpg", "/jungle2.jpg", "/three.jpg", "/blue.jpg", "/red.jpeg", "/duck.jpg"];

  return (
    <>
      <div className="flex justify-end p-2">
        <Image alt="burger" className="z-2" src={"/burger.png"} width={40} height={40}/>
      </div>
      <div className="flex flex-col justify-start align-start gap-3 p-5">
        {images.map((url, index) => (
          <Card url={url} key={url} setPaintingClicked={setPaintingClicked} final={index + 1 == images.length} />
        ))}
        <div
          className={`
            absolute left-0 top-0 bottom-0 right-0 bg-red/10 backdrop-blur-xs
            transition-opacity duration-300 z-0
            ${paintingClicked ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        />
      </div>
    </>
  );
}
