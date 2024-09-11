import { Route, Routes } from "react-router-dom";

import { About } from "../pages/About";
import { Homepage } from "../pages/Homepage";
import { Architecture } from "../pages/Architecture";
import { Events } from "../pages/Events";
import { Illustrations } from "../pages/Illustrations";
import { Music } from "../pages/Music";
import { FirstPage } from "../pages/FirstPage"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/illustrations" element={<Illustrations />} />
      <Route path="/music" element={<Music />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about-me" element={<About />} />
    </Routes>
  );
};
