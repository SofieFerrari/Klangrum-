import { useState } from "react";

import logo from "../assets/images/klangrumlogga.svg";
import headerPic from "../assets/images/fanny_hemtext.jpeg";
import hamburger from "../assets/images/Hamburger_icon.svg.png";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState();
  return (
    <>
      <header className="relative w-full">
        <img src={headerPic} className="relative h-auto w-full object-cover" />
        <img
          src={logo}
          className="absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 transform"
        />
        <select className="absolute right-2 top-2 w-5">
          <option value="Architecture">Architechture & Design</option>
          <option value="Illustrations">Illustrations</option>
          <option value="Music">Music</option>
          <option value="Events">Events</option>
          <option value="About">About Me</option>
        </select>
      </header>
    </>
  );
};
