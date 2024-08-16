import architerture from "../assets/images/fanny-ark.jpeg";
import music from "../assets/images/fanny_event.jpeg";
import illustrations from "../assets/images/fanny_illustrations.png";
import events from "../assets/images/fanny_dans.jpeg";

export const Services = () => {
  return (
    <section className="relative mb-5 flex h-auto flex-col bg-gray">
      <div className="relative mt-3 w-11/12 self-center">
        <img
          src={architerture}
          alt="Architecture"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl text-black">
          Architecture
        </h1>
      </div>
      <div className="relative mt-3 w-11/12 self-center">
        <img
          src={music}
          alt="Music"
          className="h-[200px] w-full object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl text-white">
          Music
        </h1>
      </div>
      <div className="relative mt-3 w-11/12 self-center">
        <img
          src={illustrations}
          alt="Illustrations"
          className="h-[200px] w-full object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl text-black">
          Illustrations
        </h1>
      </div>
      <div className="relative mt-3 w-11/12 self-center">
        <img
          src={events}
          alt="Events"
          className="h-[200px] w-full object-cover"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl text-white">
          Events
        </h1>
      </div>
    </section>
  );
};
