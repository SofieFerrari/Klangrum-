// import { useState } from "react";

import logo from "../assets/images/klangrumlogga.svg";
import headerPic from "../assets/images/fanny_hemtext.jpeg";
// import hamburger from "../assets/images/burger.svg";

export const Header = () => {
  // const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const handleMenuToggle = () => {
  //   setMenuIsOpen(!menuIsOpen);
  // };

  return (
    <>
      <header className="relative flex w-full flex-col items-center">
        <img src={headerPic} className="relative h-auto w-full object-cover" />
        <img
          src={logo}
          className="absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 transform md:left-4 md:top-4 md:w-24 md:translate-x-0 md:translate-y-0 lg:left-4 lg:top-4 lg:w-24"
        />
        {/* <button
          onClick={handleMenuToggle}
          className="absolute right-4 top-4 w-5 sm:flex sm:flex-col sm:justify-center md:w-8"
        >
          <img src={hamburger} />
        </button>
        {menuIsOpen && (
          <nav className="absolute right-2 top-16 z-20 w-44 border-8 border-white bg-yellow">
            <ul className="list-none p-4">
              <li>
                <a href="#architecture" className="block px-4 py-2">
                  Architecture & Design
                </a>
              </li>
              <li>
                <a href="#illustrations" className="block px-4 py-2">
                  Illustrations
                </a>
              </li>
              <li>
                <a href="#music" className="block px-4 py-2">
                  Music
                </a>
              </li>
              <li>
                <a href="#events" className="block px-4 py-2">
                  Events
                </a>
              </li>
              <li>
                <a href="#about" className="block px-4 py-2">
                  About Me
                </a>
              </li>
            </ul>
          </nav>
        )} */}
      </header>
    </>
  );
};
