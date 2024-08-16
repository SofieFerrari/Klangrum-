import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profile from "../assets/images/fanny-profil.png";

export const Contact = () => {
return (
  <>
    <section className="bg-yellowTransparent flex flex-col font-montserrat hover:bg-yellow">
      <img src={profile} className="my-8 h-40 w-40 self-center rounded-full" />
      {/* <Link to="/about"> */}
      <h1 className="mb-4 text-center text-3xl font-semibold">About me</h1>
      {/* </Link> */}
      <div className="mb-20 text-center text-xl font-medium leading-8">
        <p>KLANG-RUM</p>
        <p>Fanny Skröder</p>
        <p>Porsmossevägen 1C 141 37 HUDDINGE</p>
        <p>+46 70 155 04 60</p>
        <p>Skroder.fanny@gmail.com</p>
        <div className="flex justify-center mt-3 gap-4 items-center">
          <FaInstagram className="h-6" />
          <FaLinkedin className="h-6" />
          <FaXTwitter className="h-6" />
        </div>
      </div>
    </section>
  </>
);
};
