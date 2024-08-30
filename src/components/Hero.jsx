import logo from "/images/klangrumlogga.svg";
import headerPic from "/images/fanny_hemtex.jpeg";

export const Hero = ({ Navbar }) => {
  return (
    <>
      <header className="relative flex w-full flex-col items-center">
        <img src={headerPic} className="relative h-auto w-full object-cover" />
        <img
          src={logo}
          className="absolute bottom-8 left-1/2 w-24 -translate-x-1/2 -translate-y-1/2 transform md:left-4 md:top-4 md:w-24 md:translate-x-0 md:translate-y-0 lg:left-4 lg:top-4 lg:w-24"
        />
        <div className="absolute bottom-1 m-1 whitespace-pre-line bg-white bg-opacity-60 p-2 text-left font-montserrat text-sm font-normal text-black md:m-12 md:bg-opacity-60 md:p-4 md:text-2xl md:font-light lg:bottom-20 lg:left-1/2 lg:top-1/2 lg:ml-2 lg:box-border lg:h-[200px] lg:w-[900px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:pl-16 lg:text-5xl lg:font-normal lg:leading-relaxed">
          {`"I see music as fluid architecture"\n - Joni Mitchell`}
        </div>
      </header>
    </>
  );
};
