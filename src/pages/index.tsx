
import Card from "@/components/card";
import "../app/globals.css";

export default function Home() {
  const images = ["/palm.jpg", "/jungle2.jpg", "/three.jpg", "/blue.jpg", "/red.jpeg", "/duck.jpg"];

  return (
    <div className="flex flex-col justify-start align-start gap-3 p-5">
      {images.map((url) => (
        <Card url={url} key={url} />
      ))}
    </div>
  );
}
