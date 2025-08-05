import Image from "next/image"
import { useEffect, useState } from "react";
export default function Home() {
  const images = ["/palm.jpg", "/jungle2.jpg", "/plants.jpg"];
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => {
      if (prev === images.length - 1) {
        return 0;
      }
      return prev + 1;
    });
    }, 2000); // 10,000 ms = 10 seconds

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="px-10 top-0 static">
      <h1 className="p-0 m-0" style={{fontSize: "100px"}}>
        HI
      </h1>
      <span className="p-0 m-0 font-thin text-md">
        Welcome to my website,
        to view all art made by me navigate there.
      </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="font-thin">
          my latest art
        </span>
        <Image
            src={images[currentImage]}
            alt="image"
            width={200}
            height={400}
            className={`w-full h-full`}
        />
      </div>
    </div>
  )
}