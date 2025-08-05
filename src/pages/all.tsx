
import Card from "@/components/card";
import { useEffect, useState } from "react";

export default function All({ drowpDown, setdropDown }) {
  const [paintingClicked, setPaintingClicked] = useState<boolean>(false)
  const [closeImage, setCloseImage] = useState<boolean>(false)
  const images = ["/palm.jpg", "/jungle2.jpg", "/plants.jpg", "/three.jpg", "/blue.jpg", "/red.jpeg", "/duck.jpg"];

  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickClosePanelFromOutside = (e: any) => {
    console.log(e.target.id)
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

  return (
    <>
      <div className="pt-20 flex flex-col justify-start align-start gap-3 p-5">
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
