
const videos = [
  { url: "https://www.youtube.com/embed/xZqbaU4pY_4", name: "Push - BOA" },
  {
    url: "https://www.youtube.com/embed/THFMT6Pa9WY",
    name: "French Press - Fanny Skröder",
  },
  {
    url: "https://www.youtube.com/embed/uh9tZnrYOpg",
    name: "Travel Poem - Fanny Skröder",
  },
  {
    url: "https://www.youtube.com/embed/4TDQ9Ph2tXw",
    name: "Storsjön - Fanny Skröder",
  },
  {
    url: "https://www.youtube.com/embed/3RuU1o4ZRGo",
    name: "Gymnopedie no.1 - Fanny Skröder",
  },
];

export const Music = () => {
  return (
    <>
      <div className="flex flex-col bg-gray p-8 font-montserrat">
        <h1 className="m-10 text-right text-3xl font-bold tracking-widest text-white">
          Music
        </h1>
        <hr className="mb-10 border-t-2 border-white" />
        {videos.map((video, index) => (
          <div className="mb-10 flex flex-col" key={index}>
            <h2 className="mb-2 text-left text-2xl font-semibold text-white">
              {video.name}
            </h2>
            <div className="relative h-0 w-full pb-[56.25%]">
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src={video.url}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.name}
              ></iframe>
            </div>
          </div>
        ))}
        <hr className="mb-10 border-t-2 border-white" />
      </div>
    </>
  );
};
