import { httpClient } from "../utils";

export const searchMovies = async (query: string) => {
  const response = await httpClient?.get("", {
    params: {
      s: query,
    },
  });
  return response?.data;
};
