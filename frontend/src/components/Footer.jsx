import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import profile from "/images/fannyprofil.jpeg";
import logga from "/images/klanglogga.svg";

const linkedin = "https://www.linkedin.com/in/fanny-chandra-skr%C3%B6der/";
const instagram = "https://www.instagram.com/skroder.chandra.fanny/";
const facebook = "https://www.facebook.com/fanny.skroder/?locale=sv_SE";
const email = "mailto:Skroder.fanny@gmail.com";

export const Footer = () => {
  return (
    <section className="font-montserrat flex flex-col bg-white">
      <img src={logga} className="my-8 h-40 w-40 self-center" />
      <a href={email}>
        <h1 className="mb-4 text-center text-3xl font-semibold hover:scale-105">
          CONTACT ME
        </h1>
      </a>
      <div className="mx-4 mb-10 flex-wrap text-center text-xl font-medium leading-8">
        <p>KLANG-RUM</p>
        <p>Fanny Skröder</p>
        <p>Porsmossevägen 1C 141 37 HUDDINGE</p>
        <p>+46 70 155 04 60</p>
        <p className="text-lg">Skroder.fanny@gmail.com</p>
        <div className="mt-3 flex items-center justify-center gap-4">
          <a href={linkedin}>
            <button className="hover:scale-125" aria-label="Linkedin Button">
              <CiLinkedin className="h-8 w-8" />
            </button>
          </a>
          <a href={instagram}>
            <button className="hover:scale-125" aria-label="Instagram Button">
              <FaInstagram className="h-7 w-7" />
            </button>
          </a>
          <a href={facebook}>
            <button className="hover:scale-125" aria-label="Facebook Button">
              <FiFacebook className="h-7 w-7" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
