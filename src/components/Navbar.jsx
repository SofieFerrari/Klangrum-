import PropTypes from "prop-types";
import { useState } from "react";
import hamburger from "../assets/images/burger.svg";

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <section className="bg-yellowTransparent relative flex flex-row justify-between p-3 font-montserrat hover:bg-yellow">
        <div className="text-3xl font-bold tracking-widest">KlangRum</div>
        <button onClick={handleMenuToggle} className="absolute right-4 w-9">
          <img src={hamburger} alt="navbar" />
        </button>
        {menuIsOpen && (
          <nav className="relative top-full right-10 flex border-[20px] border-white">
            <ul className="list-none p-4">
              <li>
                <a href="#architecture" className="block pb-6">
                  Architecture & Design
                </a>
              </li>
              <li>
                <a href="#illustrations" className="block pb-6">
                  Illustrations
                </a>
              </li>
              <li>
                <a href="#music" className="block pb-6">
                  Music
                </a>
              </li>
              <li>
                <a href="#events" className="block pb-6">
                  Events
                </a>
              </li>
              <li>
                <a href="#about" className="pb-6">
                  About Me
                </a>
              </li>
            </ul>
          </nav>
        )}
      </section>
    </>
  );
};

Navbar.protoTypes = {
  text: PropTypes.string,
};
