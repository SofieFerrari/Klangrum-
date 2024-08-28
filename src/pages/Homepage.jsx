
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Carousel } from "../components/Carousel";
import { Introtext } from "../components/Introtext"


export const Homepage = () => {
  return (
    <>
      <Hero />
      <Introtext />
      <Services />
      <Carousel />
    </>
  );
};
