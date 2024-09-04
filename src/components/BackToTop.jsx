import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // Show button if scrolled more than 300px
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 cursor-pointer whitespace-pre-line rounded-full border border-black bg-yellow p-4 text-xs text-black"
        aria-label="Scroll to top"
      >
        {`Back\n to top`}
      </button>
    )
  );
};
