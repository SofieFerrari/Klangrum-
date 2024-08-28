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

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <section className="bg-white relative flex flex-row justify-between p-3 font-montserrat hover:bg-yellow">
        <Link to="/">
          <div className="font-bold tracking-widest sm:text-lg md:text-3xl">
            KLANG-RUM
          </div>
        </Link>
        <button onClick={handleMenuToggle} className="absolute right-4 w-9">
          <img src={hamburger} alt="navbar" />
        </button>
        {menuIsOpen && (
          <nav className="lg:right-12 max-w-[140px] text-right relative right-10 top-full mt-1 flex  tracking-wide">
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

Header.propTypes = {
  text: PropTypes.string,
};
