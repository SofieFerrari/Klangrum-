import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackToTop } from "./components/BackToTop";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./routes/AppRoutes";
import { FirstPageVideo } from "./components/FirstPageVideo";

const Layout = () => (
  <>
    <Header />
    <BackToTop />
    <AppRoutes />
    <Footer />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPageVideo />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
