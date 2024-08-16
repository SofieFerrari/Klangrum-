import React from "react";
import { Header } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import { Carousel } from "./components/Carousel";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Carousel />
      <Contact />
    </>
  );
};

export default App;
