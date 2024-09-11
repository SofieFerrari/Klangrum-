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
          <div className="mx-4 whitespace-pre-line bg-white bg-opacity-60 p-6 text-center font-montserrat leading-7 shadow-lg ">
            <h1 className="mb-6 text-lg font-bold tracking-widest md:text-2xl lg:text-4xl">
              Welcome to KLANG-RUM
            </h1>
            <p className="text-base md:text-lg lg:text-2xl font-base">{`KLANG-RUM is a company based in Stockholm, Sweden.\n\n In my work I do different projects with rooms and music\n and the relation between the two worlds.`}</p>
          </div>
        </div>
      </header>
    </>
  );
};
