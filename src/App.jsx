import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BackToTop } from "./components/BackToTop";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <BackToTop />
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
