import imageData from "../data/Illustrations.json"

export const Illustrations = () => {
  return (
    <>
      <div className="flex flex-col bg-gray px-8 font-montserrat">
        <h1 className="m-10 text-right text-3xl font-bold tracking-widest text-white">
          Illustrations
        </h1>
        <hr className="mb-10 border-t-2 border-white" />
        <ul className="mx-auto mb-10 w-auto self-center text-left tracking-wide">
          {imageData.map((data, index) => (
            <li className="mb-10 flex flex-col" key={index}>
              <p className="text-xl font-bold">{data.name}</p>
              <p className="max-w-[500px] text-xs font-light">
                {data.technique}
              </p>
              <img
                className="sm: w-auto md:w-[700px] lg:w-[900px]"
                src={data.image}
              />
            </li>
          ))}
        </ul>
        <hr className="mb-10 border-t-2 border-white" />
      </div>
    </>
  );
};
