import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const quotes = [
  { text: `"Fannys' creativity is mindblowing"` },
  { text: `"Klangrum helped me pick a fantastic blue color for my livingroom, I am amazed how well she knows color"`},
  { text: `"Working with Fanny has really made me step out of my comfort zone and this is truely where the magic happens!"`},
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const length = quotes.length;

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
      <div className="relative mx-10 flex flex-col">
        <p className="mx-16 flex flex-wrap justify-center p-10 text-center mb-5 text-white font-montserrat text-3xl font-bold tracking-wide">
          {quotes[index].text}
        </p>
        <div className="flex justify-between mx-10 flex-row">
          <button className="" onClick={handlePrevious}>
            <IoIosArrowBack className="h-8 w-8" />
          </button>
          <button className="" onClick={handleNext}>
            <IoIosArrowForward className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};
