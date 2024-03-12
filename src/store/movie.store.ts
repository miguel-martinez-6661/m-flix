import { create } from "zustand";
import { Movie } from "../types";
import { devtools, persist } from "zustand/middleware";

export interface MovieState {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
}

export const useMovieStore = create<MovieState>()(
  devtools(
    persist(
      (set) => ({
        movies: [],
        setMovies: (movies: any) => set({ movies }),
      }),
      {
        name: "movie-storage",
      },
    ),
  ),
);
