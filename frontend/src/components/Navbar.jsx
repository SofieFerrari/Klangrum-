import { useState } from "react";
import hamburger from "../assets/images/burger.svg";

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <section className="flex h-auto flex-col bg-yellow">
        <button onClick={handleMenuToggle} className="m-2 w-8 self-end">
          <img src={hamburger} alt="navbar" />
        </button>
        {menuIsOpen && (
          <nav className="flex self-center border-[20px] border-white bg-yellow">
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
        <div className="self-center text-xl p-7">
          "Architecture is frozen Music" - Goethe
        </div>
      </section>
    </>
  );
};
