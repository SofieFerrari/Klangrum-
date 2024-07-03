import { useState } from "react";

import logo from "../assets/images/klangrumlogga.svg";
import headerPic from "../assets/images/fanny_hemtext.jpeg";
import hamburger from "../assets/images/Hamburger_icon.svg.png";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState();
  return (
    <>
      <header className="relative w-full">
        <img src={headerPic} className="h-auto w-full object-cover" />
        <img src={logo} className="absolute left-[40%] top-[20%] w-24" />
        <img src={hamburger} className="absolute right-2 top-2 w-5" />
      </header>
    </>
  );
};
