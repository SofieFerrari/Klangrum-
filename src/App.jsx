import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FirstPage } from "./pages/FirstPage"
import { BackToTop } from "./components/BackToTop"
import { Header } from "./components/Header";
import { AppRoutes } from "./routes/AppRoutes";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route
          path="/*"
          element={
            <>
              <BackToTop />
              <Header />
              <AppRoutes />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
