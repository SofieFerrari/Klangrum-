import PropTypes from "prop-types";
import { useState } from "react";
import hamburger from "../assets/images/burger.svg";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Architecture & Design", to: "/architecture" },
  { name: "Illustrations", to: "/illustrations" },
  { name: "Music", to: "/music" },
  { name: "Events", to: "/events" },
  { name: "About Me", to: "/about-me" },
];

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <section className="bg-yellowTransparent relative flex flex-row justify-between p-3 font-montserrat hover:bg-yellow">
        <Link to="/">
          <div className="font-bold tracking-widest sm:text-lg md:text-3xl">
            KlangRum
          </div>
        </Link>
        <button onClick={handleMenuToggle} className="absolute right-4 w-9">
          <img src={hamburger} alt="navbar" />
        </button>
        {menuIsOpen && (
          <nav className="relative right-10 top-full mt-1 flex max-w-[140px] border-[2px] border-black">
            <ul className="list-none p-4">
              {navigation.map((item) => (
                <NavLink key={item.name} to={item.to} className="block pb-6">
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </nav>
        )}
      </section>
    </>
  );
};

Navbar.propTypes = {
  text: PropTypes.string,
};
