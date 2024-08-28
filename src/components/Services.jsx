import { NavLink } from "react-router-dom";

import architerture from "../assets/images/fanny-ark.jpeg";
import music from "../assets/images/fanny_event.jpeg";
import illustrations from "../assets/images/fanny_illustrations.png";
import events from "../assets/images/fanny_dans.jpeg";

const navigation = [
  { name: "Architecture & Design", to: "/architecture", img: architerture, alt: "Architecture" },
  { name: "Illustrations", to: "/illustrations", img: illustrations, alt: "Illustrations" },
  { name: "Music", to: "/music", img: music, alt: "Music" },
  { name: "Events", to: "/events", img: events, alt: "Events" },
];

export const Services = () => {
  return (
    <section className="relative flex h-auto flex-col gap-4 bg-gray pt-4 font-montserrat font-bold md:grid md:grid-cols-2 lg:grid-cols-4">
      {navigation.map((item) => (
        <div key={item.name} className="relative m-5 w-11/12 self-center">
          <NavLink to={item.to} className="block pb-6">
            <img
              src={item.img}
              alt={item.alt}
              className="h-[300px] w-full rounded-md object-cover"
            />
            <h1 className="absolute left-1/2 top-1/2 box-border -translate-x-1/2 -translate-y-1/2 transform bg-white bg-opacity-70 p-2 text-3xl text-black">
              {item.name}
            </h1>
          </NavLink>
        </div>
      ))}
    </section>
  );
};
