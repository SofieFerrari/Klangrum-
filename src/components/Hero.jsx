import logo from "../assets/images/Klangrumlogga.svg";
import headerPic from "../assets/images/fanny_hemtex.jpeg";
import { Navbar } from "./Navbar";
// import hamburger from "../assets/images/burger.svg";

export const Header = ({ Navbar }) => {
  return (
    <>
      <header className="relative flex w-full flex-col items-center">
        <img src={headerPic} className="relative h-auto w-full object-cover" />
        {Navbar}
        <img
          src={logo}
          className="absolute left-1/2 bottom-8 w-24 -translate-x-1/2 -translate-y-1/2 transform md:left-4 md:top-4 md:w-24 md:translate-x-0 md:translate-y-0 lg:left-4 lg:top-4 lg:w-24"
        />
        <div className="absolute p-2 bottom-1 m-1 whitespace-pre-line bg-white bg-opacity-60 text-left font-montserrat text-sm font-extralight text-black md:m-12 md:bg-opacity-60 md:p-4 md:text-2xl md:font-light lg:bottom-20 lg:left-1/2 lg:top-1/2 lg:ml-2 lg:box-border lg:h-[200px] lg:w-[900px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:pl-16 lg:text-5xl lg:font-light lg:leading-relaxed">
          {`"I see music as fluid architecture"\n - Joni Mitchell`}
        </div>
      </header>
    </>
  );
};
