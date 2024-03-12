import { useCallback, useEffect, useState } from "react";
import { useMovieStore } from "../store/movie.store";
import { searchMovies } from "../controllers/movie-controller";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const initialState = {
  searchFilter: "batman",
};

const MovieCarousel = ({ movies }) => {
  return (
    <Carousel>
      <CarouselContent>
        {movies?.map((movie) => (
          <CarouselItem
            className="pl-4 basis-1/6 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            key={movie.imdbID}
          >
            <img src={movie.Poster} alt={movie.Title} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { movies, setMovies } = useMovieStore();

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    const response = await searchMovies(initialState.searchFilter);
    setMovies([...response?.Search]);
    setLoading(false);
  }, []);

  const handleSearch = useCallback(async () => {
    const response = await searchMovies(searchInput);
    setMovies([...response?.Search]);
  }, [searchInput]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="p-20 min-h-screen bg-black">
      <div className="flex justify-center items-center bg-cover bg-center">
        <div className="absolute top-0 left-0 mt-5 ml-5">
          <h1 className="text-red-500 text-3xl font-bold uppercase">M-flix</h1>
        </div>
        <div className="flex flex-col justify-center items-center space-y-5 w-full">
          <p className="text-white font-bold text-5xl flex flex-col items-center">
            <span>
              Unlimited movies, TV <br />
            </span>
            <span> shows and more. </span>
          </p>
          <p className="text-white font-semibold text-3xl flex flex-col items-center">
            Watch anywhere.
          </p>
          <p className="text-white text-lg flex flex-col items-center">
            Ready to watch? Enter your movie name or release year.
          </p>

          <div className="flex flex-row items-center justify-center w-1/2">
            <input
              type="text"
              placeholder="Movie name or release year"
              className="p-4 focus:outline-none focus:ring-1 focus:ring-blue-300 w-3/4"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button
              className="p-4 text-l font-semibold bg-red-600 hover:bg-red-700 text-white"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-white text-2xl mb-1">Popular</h1>
        <MovieCarousel movies={movies} />
      </div>
    </div>
  );
};
