// import logo from "/images/Klangrumlogga.svg";
import headerPic from "/images/fanny_hemtex.jpeg";

export const Hero = () => {
  return (
    <>
      <header className="relative flex h-[60vh] w-full md:h-[80vh] lg:h-[90vh]">
        <img
          src={headerPic}
          alt="Header"
          className="relative h-auto w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="mx-4 max-w-sm bg-white bg-opacity-60 p-4 text-center font-montserrat font-base text-black shadow-lg md:max-w-md md:text-3xl lg:text-6xl lg:min-w-[900px]">
            {`"I see music as fluid architecture"\n - Joni Mitchell`}
          </div>
        </div>
      </header>
    </>
  );
};


// absolute top-1/2 m-1 whitespace-pre-line bg-white bg-opacity-60 p-2 text-left font-montserrat text-lg font-normal text-black md:m-12 md:bg-opacity-60 md:p-4 md:text-4xl md:font-light lg:bottom-20 lg:left-1/2 lg:top-1/2 lg:ml-2 lg:box-border lg:h-[200px] lg:w-[900px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:pl-16 lg:text-5xl lg:font-normal lg:leading-relaxed