import PropTypes from "prop-types";
import { useState } from "react";
import hamburger from "/images/burger.svg";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
// import logo from "/images/Klangrumlogga.svg";

const navigation = [
  { name: "Home", to: "/home" },
  { name: "Architecture & Design", to: "/architecture" },
  { name: "Illustrations", to: "/illustrations" },
  { name: "Music", to: "/music" },
  { name: "Events", to: "/events" },
  { name: "About Me", to: "/about-me" },
];

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleMenuItemClick = () => {
    setMenuIsOpen(false);
  };

  return (
    <>
      <section className="relative flex flex-row justify-between bg-white p-3 font-montserrat hover:bg-yellow">
        <Link to="/home">
          <div className="flex flex-row gap-2">
            {/* <img src={logo} className="w-8" /> */}
            <h1 className="font-bold tracking-widest text-3xl">
              KLANG-RUM
            </h1>
          </div>
        </Link>
        <button onClick={handleMenuToggle} className="absolute right-2 w-9">
          <img src={hamburger} alt="navbar" />
        </button>
        {menuIsOpen && (
          <nav className="relative font-medium right-10 top-full mt-1 flex max-w-[140px] text-right tracking-wide lg:right-12">
            <ul className="list-none p-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={handleMenuItemClick}
                  className="block pb-6"
                >
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

Header.propTypes = {
  text: PropTypes.string,
};
