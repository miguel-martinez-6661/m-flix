import { useCallback, useEffect, useState } from "react";
import { searchMovies } from "@/controllers/movie-controller";
import { useMovieStore } from "@/store/movie.store";
import { Movie } from "@/types";

interface UseMovies {
  fetchOnLoad?: boolean;
}

export const useMovies = ({ fetchOnLoad = false }: UseMovies) => {
  const [loading, setLoading] = useState(false);
  const { movies, setMovies, searchFilter, setSearchFilter, setSelectedMovie } =
    useMovieStore();
  const [searchInput, setSearchInput] = useState<string>(searchFilter);

  const search = useCallback(
    async (query: string) => {
      setLoading(true);
      const response = await searchMovies(query);
      setSearchFilter(query);
      setMovies(response || []);
      setLoading(false);
    },
    [setMovies],
  );

  const onSearch = useCallback(() => {
    search(searchInput);
  }, [search, searchInput]);

  const onSelectMovie = useCallback(
    (movie: Movie) => {
      setSelectedMovie(movie);
    },
    [useMovieStore],
  );

  useEffect(() => {
    if (fetchOnLoad) search(searchInput);
  }, [fetchOnLoad, search]);

  return {
    searchInput,
    setSearchInput,
    loading,
    movies,
    onSearch,
    onSelectMovie,
  };
};
