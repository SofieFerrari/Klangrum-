import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BackToTop } from "./components/BackToTop";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer } from "./components/Footer";
// import { Breadcrumbs } from "./components/Breadcrumbs";
// import { BackButton } from "./components/BackButton"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <BackToTop />
        <Header />
        {/* <BackButton /> */}
        {/* <Breadcrumbs /> */}
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
