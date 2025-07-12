import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Card({ url, setPaintingClicked, final, closeImage, dropdown }: { url: string, setPaintingClicked: (state: boolean) => void, final: boolean, closeImage: boolean, dropdown: boolean }) {
  const [clicked, setClicked] = useState<boolean>(false);
  const [offsetY, setOffsetY] = useState<number>(0)
  const cardContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (clicked) {
      handleClick()
    }
  }, [closeImage])

  const handleClick = () => {
    if (clicked) {
      setClicked(false);
      setPaintingClicked(false)
      
    }
    else if (cardContainer.current && !dropdown) {
      const rect = cardContainer.current.getBoundingClientRect();
      setOffsetY(rect.top);
      setClicked(true);
      setPaintingClicked(true)
      document.body.style.overflow = "hidden"
    }
  };

  return (
    <>
    <div 
      ref={cardContainer}
      className={`w-full perspective-normal inset-0 relative p-0 duration-300 ease-out transition-transform z-index-transformation
        ${clicked ? 'pt-5' : ''}
        ${clicked ? 'onTop' : 'notOnTop'}
        ${final ? 'h-full' : 'h-20'}
      `}
      style={{
          transform: clicked ? `translateY(-${offsetY}px)` : "translateY(0px)",
      }}
    >
        <Image
          onClick={() => handleClick()}
          src={url}
          alt="image"
          width={500}
          height={400}
          className={`rounded-xl w-full h-auto cursor-pointer origin-top duration-300 ease-out transition-transform
            `}

          style={{
            transform: clicked ? `rotateX(0deg)` : "rotateX(-50deg)",
          }}
        />
        { clicked ? 
          <div className="h-16 flex rounded-xs justify-between align-end p-1 bg-white/0">
            <h1 >
              PAINTING
            </h1>
            <div className="flex flex-col items-end">
              <p>
                200x200
              </p>
              <p>
                01/01/0101
              </p>
            </div>
            
          </div>
          :
          null
       }
    </div>
    </>
  );
}
