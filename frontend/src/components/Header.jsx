// import { Link, Navlink } from "react-router-dom"
import logo from "../assets/images/klangrumlogga.svg";

// const navigation = [
//   { name: "Architecture & Design", to: "/" },
//   { name: "Illustrations", to: "/illustrations" },
//   { name: "Music", to: "/music" },
//   { name: "Services", to: "/services" },
//   { name: "About", to: "/about" },
//   { name: "Events", to: "/events" },
// ];

const navigation = [
  { name: "Architecture & Design"},
  { name: "Illustrations" },
  { name: "Music"},
  { name: "Services"},
  { name: "About"},
  { name: "Events"},
];

export const Header = () => {
  return (
    <header className="bg-dirtWhite w-full">
      {/* <Link to="/"> */}
      <div className="m-5 flex flex-col items-center justify-center">
        <img src={logo} height={200} width={200} />
        {/* </Link> */}
        <div className="flex flex-row gap-x-14 p-2 text-center">
          {navigation.map((item) => (
            <ul
              key={item.name}
              className="hover:text-light-gray text-lg font-semibold"
            >
              {item.name}
            </ul>
          ))}
        </div>
      </div>
    </header>
  );
};


// till map över nav <div className="hidden lg:flex lg:gap-x-14"></div>