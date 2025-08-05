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
    <div className="flex h-full flex-col pt-20 justify-between items-center">
    
        <div className="h-60 flex items-center">
          <span className="font-thin text-lg">
            latest art
          </span>
        </div>
      
        <Image
            src={images[currentImage]}
            alt="image"
            width={1000}
            height={1000}
            className={`w-full h-full object-cover`}
        />
    
    </div>
  )
}