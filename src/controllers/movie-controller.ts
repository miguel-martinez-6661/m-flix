import { httpClient } from "../utils";

export const searchMovies = async (query: string) => {
  const response = await httpClient?.get("", {
    params: {
      s: query,
    },
  });
  return response?.data;
};

export const getMovieById = async (id: string) => {
  const response = await httpClient?.get("", {
    params: {
      i: id,
      plot: "full",
    },
  });
  return response?.data;
};
