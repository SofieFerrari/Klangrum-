
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Carousel } from "../components/Carousel";
import { Quote } from "../components/IntroQuote"


export const Homepage = () => {
  return (
    <>
      <Hero />
      <Quote />
      <Services />
      <Carousel />
    </>
  );
};
