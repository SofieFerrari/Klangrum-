import architerture from "../assets/images/fanny-ark.jpeg";
import music from "../assets/images/fanny_event.jpeg";
import illustrations from "../assets/images/fanny_illustrations.png";
import events from "../assets/images/fanny_dans.jpeg";

export const Services = () => {
  return (
    <section className="relative flex h-auto flex-col pt-4 bg-gray gap-4 font-montserrat font-bold">
      <div className="relative mt-3 w-11/12 self-center">
        <img
          src={architerture}
          alt="Architecture"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <h1 className="absolute left-1/2 top-1/2 box-border -translate-x-1/2 -translate-y-1/2 transform bg-white bg-opacity-70 p-2 text-3xl text-black">
          Architecture
        </h1>
      </div>
      <div className="relative mt-3 w-11/12 self-center">
        <img
          src={music}
          alt="Music"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <h1 className="absolute left-1/2 top-1/2 box-border -translate-x-1/2 -translate-y-1/2 transform bg-white bg-opacity-70 p-2 text-3xl text-black">
          Music
        </h1>
      </div>
      <div className="relative mt-3 w-11/12 self-center">
        <img
          src={illustrations}
          alt="Illustrations"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <h1 className="absolute left-1/2 top-1/2 box-border -translate-x-1/2 -translate-y-1/2 transform bg-white bg-opacity-70 p-2 text-3xl text-black">
          Illustrations
        </h1>
      </div>
      <div className="relative mt-3 w-11/12 self-center">
        <img
          src={events}
          alt="Events"
          className="mb-5 h-[200px] w-full rounded-md object-cover"
        />
        <h1 className="absolute left-1/2 top-1/2 box-border -translate-x-1/2 -translate-y-1/2 transform bg-white bg-opacity-70 p-2 text-3xl text-black">
          Events
        </h1>
      </div>
    </section>
  );
};
