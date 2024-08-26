import React, { useState } from "react";
import fisk from "../assets/images/fanny-fisk.svg";
import ill from "../assets/images/fanny_illustrations.png";
import dans from "../assets/images/fanny_dans.jpeg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const items = [
  { src: fisk, alt: "fisk" },
  { src: ill, alt: "illustration" },
  { src: dans, alt: "dans" },
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const length = items.length;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <section className="bg-gray py-5">
      <div className="rounded relative mx-auto w-full max-w-xl">
        <img
          src={items[index].src} className="h-[500px] rounded-md object-cover"
        />
        <button
          className="absolute left-4 top-1/2 w-8 -translate-y-1/2 transform rounded-full bg-white hover:scale-75"
          onClick={handlePrevious}
        >
          <IoIosArrowBack className="h-8 w-8" />
        </button>
        <button
          className="absolute right-4 top-1/2 w-8 -translate-y-1/2 transform rounded-full bg-white hover:scale-75"
          onClick={handleNext}
        >
          <IoIosArrowForward className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};
