import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";

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
        <p className="mx-10 mb-10 w-auto self-center text-right text-lg tracking-wide">
          As an Interior Designer/Architect with 4 years of work experience, I
          have mainly worked with store interiors and offices at the interior
          design side. I have established a good ability to create selling rooms
          and efficient flows - both for interior and exterior. In the role of
          an Architect, I also have experience in drawing alterations and
          additions with ROT orientation for private clients as well as building
          permit documents for private clients and stores. And as a piano
          player/teacher I've worked teaching kids and teenagers how to play
          piano from the age of 6-25 years old. I've also worked as a barpiano
          player at the Silja Line Galaxy. At last I've also played in several
          pop/jazz/folk bands and been singing in different choirs.
        </p>
      </div>
      <div className="flex flex-col bg-gray pb-10 pr-14 text-right font-montserrat">
        <p className="text-md tracking-wide text-white">View my resume</p>
        <a href={linkedin}>
          <button className="font-bold text-white hover:scale-125 hover:text-black">
            <CiLinkedin className="h-12 w-12" />
          </button>
        </a>
      </div>
    </>
  );
};
