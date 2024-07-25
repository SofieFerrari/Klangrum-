import { useState } from "react";
import hamburger from "../assets/images/burger.svg";

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <section className="flex h-[350px] flex-col bg-yellow">
        <button onClick={handleMenuToggle} className="m-2 w-8 self-end">
          <img src={hamburger} alt="navbar" />
        </button>
        {menuIsOpen && (
          <nav className="mr-2 flex w-44 self-end border-8 border-white bg-yellow">
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
        )}
      </section>
    </>
  );
};
