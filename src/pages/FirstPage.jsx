import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import photo from "/images/firstphoto.png";

export const FirstPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 20000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleClick = () => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <>
      <div className="relative flex h-screen sm:flex-col items-center justify-start md:justify-end lg:justify-end">
        <div className="absolute md:left-6 md:top-10 lg:left-6 lg:top-10 lg:p-4">
          <button
            onClick={handleClick}
            className="mt-20 cursor-pointer font-montserrat text-6xl font-bold text-black/55 hover:text-black lg:text-7xl"
          >
            KLANG-RUM
          </button>
        </div>
        <img className="h-full object-contain" src={photo} />
      </div>
    </>
  );
};
