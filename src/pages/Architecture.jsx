import architecht from "../data/architectureData.json";

export const Architecture = () => {
  return (
    <>
      <div className="flex flex-col bg-gray p-8 font-montserrat">
        <h1 className="m-10 text-right text-3xl font-bold tracking-widest text-white">
          Architecture and Design
        </h1>
        <p className="mx-5 mb-20 max-w-[1100px] self-end text-center md:text-right lg:text-right text-sm  lg:tect-lg md:text-lg tracking-wide">
          Architecture Consultant Interior, Housing, Retail, Office, Workshops
          As an architect I have mostly worked with building permits, office
          planning, interior retail and recycling. I have also done workshops
          for children. You can contact me if you want any help with building
          permits for your house or interior design suggestions & solutions.
        </p>
        <ul className="mx-auto mb-20 w-auto self-center text-left tracking-wide">
          {architecht.map((data, index) => (
            <li className="mb-10 flex flex-col" key={index}>
              <p className="text-xl font-bold">{data.name}</p>
              <p className="max-w-[900px] text-xs font-light">{data.about}</p>
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
