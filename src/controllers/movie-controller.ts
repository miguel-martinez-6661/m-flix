import { httpClient } from "@/utils";

export const searchMovies = async (query: string) => {
  try {
    const response = await httpClient?.get("", {
      params: {
        s: query,
        y: query,
      },
    });

    return response?.data?.Search || [];
  } catch (error) {
    console.error("Error searching movies", error);
  }
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
