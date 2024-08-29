import eventData from "../data/EventData.json";

export const Events = () => {
  return (
    <>
      <div className="flex flex-col bg-gray p-8 font-montserrat">
        <h1 className="m-10 text-right text-3xl font-bold tracking-widest text-white">
          Events
        </h1>
        <ul className="mx-10 mb-20 w-auto self-center text-right tracking-wide">
          {eventData.map((event, index) => (
            <li className="mb-5 flex flex-col text-left" key={index}>
              <p className="text-xl font-bold">{event.name}</p>
              <p className="text-lg">{event.date}</p>
              <p className="text-lg">{event.about}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
