import { create } from "zustand";
import { Movie } from "../types";
import { devtools, persist } from "zustand/middleware";

interface MovieState {
  movies: Movie[];
  searchFilter: string;
  setMovies: (movies: Movie[]) => void;
  setSearchFilter: (searchFilter: string) => void;
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie) => void;
}

export const useMovieStore = create<MovieState>()(
  devtools(
    persist(
      (set) => ({
        movies: [],
        searchFilter: "",
        setMovies: (movies: any) => set({ movies }),
        setSearchFilter: (searchFilter: string) => set({ searchFilter }),
        selectedMovie: null,
        setSelectedMovie: (selectedMovie: Movie) => set({ selectedMovie }),
      }),
      {
        name: "movie-storage",
      },
    ),
  ),
);
