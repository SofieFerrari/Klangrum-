import profile from "/images/fannyprofil.jpeg";
import { CiLinkedin } from "react-icons/ci";

const linkedin = "https://www.linkedin.com/in/fanny-chandra-skr%C3%B6der/";
const instagram = "https://www.instagram.com/skroder.chandra.fanny/";
const facebook = "https://www.facebook.com/fanny.skroder/?locale=sv_SE";

export const About = () => {
  return (
    <>
      <div className="flex flex-col bg-gray p-8 font-montserrat">
        <h1 className="m-10 text-right text-3xl font-bold tracking-widest text-white">
          FANNY CHANDRA SKRÖDER
        </h1>
        <hr className="mb-10 border-t-2 border-white" />
        <div className="flex flex-col md:flex-row md:justify-evenly">
          <p className="mx-10 mb-10 min-w-[300px] md:self-start self-center lg:self-start whitespace-pre-line t md:text-left text-sm tracking-wide md:text-lg">
            {`As an Interior Designer/Architect with 4 years of work experience, I
          have mainly worked with store interiors and offices at the interior
          design side. I have established a good ability to create selling rooms
          and efficient flows - both for interior and exterior. \n\n In the role of
          an Architect, I also have experience in drawing alterations and
          additions with ROT orientation for private clients as well as building
          permit documents for private clients and stores. \n\n And as a piano
          player/teacher I've worked teaching kids and teenagers how to play
          piano from the age of 6-25 years old. I've also worked as a barpiano
          player at the Silja Line Galaxy. At last I've also played in several
          pop/jazz/folk bands and been singing in different choirs.`}
          </p>
          <img
            src={profile}
            className="md:h-[300px] md:w-[300px] sm:h-[200px] sm:w-[200px] mb-10 md:mt-12 self-center rounded-full border-4"
          />
        </div>
        <hr className="mb-10 border-t-2 border-white" />
      </div>
      <div className="flex flex-col bg-gray pb-10 pr-14 text-right font-montserrat">
        <p className="text-md tracking-wide text-black">View my resume</p>
        <a href={linkedin}>
          <button className="font-bold text-black hover:scale-125 hover:text-black">
            <CiLinkedin className="h-12 w-12" />
          </button>
        </a>
      </div>
    </>
  );
};
