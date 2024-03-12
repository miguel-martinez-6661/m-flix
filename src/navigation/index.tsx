import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, MovieDetailsPage, NotFoundPage } from "../pages";
import { useAppConfig } from "../hooks/use-app-config";

export const Navigation = () => {
  useAppConfig();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
