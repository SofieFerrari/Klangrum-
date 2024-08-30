import imageData from "../data/Illustrations.json"

export const Illustrations = () => {
  return (
    <>
      <div className="flex flex-col bg-gray px-8 font-montserrat">
        <h1 className="m-10 text-right text-3xl font-bold tracking-widest text-white">
          Illustrations
        </h1>
        <ul className="mx-auto mb-20 w-auto self-center text-left tracking-wide">
          {imageData.map((data, index) => (
            <li className="mb-10 flex flex-col" key={index}>
              <p className="text-xl font-bold">{data.name}</p>
              <p className="max-w-[500px] font-light text-xs">
                {data.technique}
              </p>
              <img
                className="sm: w-auto md:w-[700px] lg:w-[900px]"
                src={data.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
