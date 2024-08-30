import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import video from "/images/fannyvidlag.mp4"; // Importera videon

export const FirstPageVideo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="relative flex h-screen items-center justify-center">
        <video autoPlay muted className="h-full w-full object-cover">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={handleClick}
          className="absolute z-10 hover:text-white cursor-pointer font-montserrat text-5xl font-bold text-white/55"
        >
          KLANG-RUM
        </button>
      </div>
    </>
  );
};
