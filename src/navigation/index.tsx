import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, MovieDetails } from "../pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
