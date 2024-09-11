import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const quotes = [
  {
    text: `"Jag kan verkligen rekommendera Fanny Skröder. Hon är en begåvad inredningsarkitekt som kan jobba i nästan alla ritprogram."\n - Peter Sahlin, VD & grundare Reform Arkitekter`,
  },
  {
    text: `"Vi kunde inte gjort detta utan Fanny! Vi är så nöjda!"\n - Systrarna Alsén`,
  },
  {
    text: `"Fannys' creativity is mindblowing"\n - Sofie, Customer`,
  },
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
      <div className="relative mx-10 flex flex-col items-center">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 transform text-black/70"
          onClick={handlePrevious}
        >
          <IoIosArrowBack className="h-8 w-8" />
        </button>
        <div className="relative flex h-52 items-center justify-center">
          <p className="mx-16 mb-5 whitespace-pre-line p-10 text-center font-montserrat text-sm md:text-2xl lg:text-2xl font-bold italic tracking-wide text-black/70">
            {quotes[index].text}
          </p>
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 transform text-black/70"
          onClick={handleNext}
        >
          <IoIosArrowForward className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};
