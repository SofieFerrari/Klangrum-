import eventData from "../data/EventData.json";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const Events = () => {
  return (
    <>
      <div className="flex flex-col bg-gray p-8 font-montserrat">
        <h1 className="m-10 text-right text-3xl font-bold tracking-widest text-white">
          Events
        </h1>
        <Breadcrumbs />
        <p className="mx-10 mb-3 w-auto text-left font-semibold tracking-wide">
          Previous events
        </p>
        <ul className="mx-10 mb-10 w-auto self-center text-right tracking-wide">
          {eventData.map((event, index) => (
            <li className="mb-5 flex flex-col text-left" key={index}>
              <p className="text-xl font-bold">{event.name}</p>
              <p className="text-lg">{event.date}</p>
              <p className="text-lg">{event.about}</p>
            </li>
          ))}
        </ul>
        <hr className="mb-10 border-t-2 border-white" />
      </div>
    </>
  );
};
