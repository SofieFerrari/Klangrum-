import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import video from "/images/fannyvidlag.mp4";

export const FirstPageVideo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 14000);

    return () => clearTimeout(timer);
  }, [navigate]);

const handleClick = () => {
  setTimeout(() => {
    navigate("/home");
  }, 2000);
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
          className="absolute z-10 cursor-pointer font-montserrat text-5xl font-bold text-white/55 hover:text-white"
        >
          KLANG-RUM
        </button>
      </div>
    </>
  );
};
