import { Route, Routes } from "react-router-dom"

import { About } from "../pages/About"
import { Homepage } from "../pages/Homepage"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-me" element={<About />} />
    </Routes>
  )
}