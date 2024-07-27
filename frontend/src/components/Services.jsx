import architerture from "../assets/images/fanny-ark.jpeg"
import music from "../assets/images/fanny_event.jpeg";

export const Services = () => {
  return (
    <section className="relative flex h-auto flex-col bg-gray">
      <div className="relative mt-5 w-11/12 self-center">
        <img src={architerture} alt="Architecture" className="w-full" />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl text-black">
          Architecture
        </h1>
      </div>
      <div className="relative mt-5 w-11/12 self-center">
        <img src={music} alt="Music" className="w-full" />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl text-black">
          Music
        </h1>
      </div>
    </section>
  );
}