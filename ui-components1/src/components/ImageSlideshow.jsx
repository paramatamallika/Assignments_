import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const images = [
  "https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg",
    "https://img.freepik.com/premium-photo/snowy-mountain-peak-starry-galaxy-majesty_884296-100927.jpg",
  "https://i.pinimg.com/736x/5c/d6/cd/5cd6cd555cb35933a26dbf12c428ffbe.jpg",
];

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardContent className="space-y-4 text-center">
        <h2 className="text-xl font-bold">Image Slideshow</h2>

        <img src={images[index]} alt="slideshow" className="mx-auto" />

        <div className="flex justify-between">
          <Button onClick={prevImage}>Previous</Button>
          <Button onClick={nextImage}>Next</Button>
        </div>
      </CardContent>
    </Card>
  );
}
