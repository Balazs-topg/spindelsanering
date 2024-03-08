import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// import * from "/bilder-sanering-goteborg"
// import image1 from "bilder-sanering-goteborg/A4026E6F-F6FB-41F6-82F3-2676620B4251.jpg";
import image1 from "../../public/bilder-sanering-goteborgs/A4026E6F-F6FB-41F6-82F3-2676620B4251.jpg";
import image2 from "../../public/bilder-sanering-goteborgs/IMG_2681.jpeg";
import image3 from "../../public/bilder-sanering-goteborgs/IMG_2700.jpeg";
import image4 from "../../public/bilder-sanering-goteborgs/IMG_3888.jpeg";
import image5 from "../../public/bilder-sanering-goteborgs/IMG_4005.jpeg";
import image6 from "../../public/bilder-sanering-goteborgs/IMG_4150.jpeg";
import image7 from "../../public/bilder-sanering-goteborgs/IMG_5085.jpeg";
import image8 from "../../public/bilder-sanering-goteborgs/IMG_5117.jpeg";
import image9 from "../../public/bilder-sanering-goteborgs/IMG_5336.jpeg";
import image10 from "../../public/bilder-sanering-goteborgs/IMG_5344.jpeg";
import image11 from "../../public/bilder-sanering-goteborgs/IMG_5406.jpeg";
import image12 from "../../public/bilder-sanering-goteborgs/IMG_6377.jpeg";
import image13 from "../../public/bilder-sanering-goteborgs/IMG_6647.jpeg";
import image14 from "../../public/bilder-sanering-goteborgs/IMG_6668.jpeg";
import image15 from "../../public/bilder-sanering-goteborgs/IMG_6668.jpeg";
import image16 from "../../public/bilder-sanering-goteborgs/IMG_6676.jpeg";
import image17 from "../../public/bilder-sanering-goteborgs/IMG_8903.jpeg";

const arrayOfImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
];
// import * as images from "../../public/bilder-sanering-goteborgs";

export default function CarouselI() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full overflow-hidden rounded-xl"
    >
      <CarouselContent>
        {arrayOfImages.map((image, index) => (
          <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4">
            <CardContent className="overflow-hidden rounded-xl p-0 shadow-lg">
              {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
              <img alt="" src={image.src}></img>
            </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="translate-x-[170%] bg-black text-white hover:bg-black hover:text-white" />
      <CarouselNext className="-translate-x-[170%] bg-black text-white hover:bg-black hover:text-white" />
    </Carousel>
  );
}
