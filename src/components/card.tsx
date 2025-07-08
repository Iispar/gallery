import { useState } from "react";
import Image from "next/image";

export default function Card({ url }: { url: string }) {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <>
    <div 
    id={clicked ? "card-parent-transitions" : ""}
    className={`w-full perspective-normal inset-0 h-20 relative p-0
    `}>
        <Image
          onClick={() => setClicked(!clicked)}
          id={clicked ? "card-transitions" : ""}
          src={url}
          alt="test"
          width={500}
          height={400}
          className={`rounded-xl w-full h-auto cursor-pointer origin-top -rotate-x-50`}
        />
        { clicked ? 
          <div className="flex justify-between p-1">
            <h1 >
              Painting
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
