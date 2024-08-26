import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { Carousel } from "../components/Carousel"
import { Contact } from "../components/Contact"

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Carousel />
      <Contact />
    </>
  );
};
