import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 cursor-pointer whitespace-pre-line rounded-full  bg-yellow p-3 text-xs font-medium text-black shadow-lg"
          aria-label="Scroll to top"
        >
          {`Back\n to top`}
        </button>
      )}
    </>
  );
};
