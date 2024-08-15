import { Link } from "react-router-dom";
import profile from "../assets/images/fanny-profil.png";

export const Contact = () => {
return (
  <>
    <section className="flex flex-col bg-yellow">
        <img src={profile} className="my-8 h-40 w-40 self-center rounded-full" />
        {/* <Link to="/about"> */}
        <h1 className="text-center text-3xl mb-4">About me</h1>
        {/* </Link> */}
        <div className="text-center text-xl leading-8 mb-5">
          <p>KLANG-RUM</p>
          <p>Fanny Skröder</p>
          <p>Porsmossevägen 1C 141 37 HUDDINGE</p>
          <p>+46 70 155 04 60</p>
          <p>Skroder.fanny@gmail.com</p>
        </div>
    </section>
  </>
);
};
