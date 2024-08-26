import architerture from "../assets/images/fanny-ark.jpeg";
import music from "../assets/images/fanny_event.jpeg";
import illustrations from "../assets/images/fanny_illustrations.png";
import events from "../assets/images/fanny_dans.jpeg";

export const Services = () => {
  return (
    <section className="relative flex h-auto flex-col gap-4 bg-gray pt-4 font-montserrat font-bold md:grid md:grid-cols-2 lg:grid-cols-4">
      <div className="relative m-5 w-11/12 self-center">
        <img
          src={architerture}
          alt="Architecture"
          className="h-[300px] w-full rounded-md object-cover"
        />
        <h1 className="absolute left-1/2 top-1/2 box-border -translate-x-1/2 -translate-y-1/2 transform bg-white bg-opacity-70 p-2 text-3xl text-black">
          Architecture
        </h1>
      </div>
      <div className="relative mx-3 w-11/12 self-center">
        <img
          src={music}
          alt="Music"
          className="h-[300px] w-full rounded-md object-cover"
        />
        <h1 className="absolute left-1/2 top-1/2 box-border -translate-x-1/2 -translate-y-1/2 transform bg-white bg-opacity-70 p-2 text-3xl text-black">
          Music
        </h1>
      </div>
      <div className="relative mx-3 w-11/12 self-center">
        <img
          src={illustrations}
          alt="Illustrations"
          className="h-[300px] w-full rounded-md object-cover"
        />
        <h1 className="absolute left-1/2 top-1/2 box-border -translate-x-1/2 -translate-y-1/2 transform bg-white bg-opacity-70 p-2 text-3xl text-black">
          Illustrations
        </h1>
      </div>
      <div className="relative mx-3 w-11/12 self-center">
        <img
          src={events}
          alt="Events"
          className="h-[300px] w-full rounded-md object-cover"
        />
        <h1 className="absolute left-1/2 top-1/2 box-border -translate-x-1/2 -translate-y-1/2 transform bg-white bg-opacity-70 p-2 text-3xl text-black">
          Events
        </h1>
      </div>
    </section>
  );
};
