import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { Movie } from "@/types";
import { getMovieById } from "@/controllers/movie-controller";
import { useMovieStore } from "@/store/movie.store";
import { CarouselItem } from "../ui/carousel";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

export const MovieCarouselCard = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();
  const { setSelectedMovie } = useMovieStore();
  const [movieInfo, setMovieInfo] = useState<Movie | null>(null);

  const customDescription = useMemo(() => {
    if (movieInfo) {
      return movieInfo.Plot.length > 100
        ? `${movieInfo.Plot.substring(0, 100)}...`
        : movieInfo.Plot;
    }
    return "";
  }, [movieInfo?.Plot]);

  const fetchMovieInfo = async () => {
    const result = await getMovieById(movie.imdbID);
    setMovieInfo(result);
  };

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  return (
    <Popover>
      <CarouselItem
        className="basis-1/3 md:basis-1/6 lg:basis-1/8 max-h-[500px] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out rounded overflow-hidden"
        key={movie.imdbID}
        onClick={() => {
          setSelectedMovie(movieInfo as Movie);
        }}
      >
        <PopoverTrigger className="h-full">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-full object-cover"
          />
        </PopoverTrigger>
        <PopoverContent className="bg-black border-gray-700">
          <div className="flex items-center">
            <div className="flex flex-col flex-1">
              <p className="text-white">{movie.Title}</p>
              <p className="text-gray-400">{movie.Year}</p>
            </div>
            <div className="flex items-center gap-1">
              <FcLike />
              <p className="text-white">{movieInfo?.imdbVotes}</p>
            </div>
          </div>
          <p className="text-white text-sm">{customDescription}</p>
          <Button className="w-full mt-2 bg-red-600" onClick={() => navigate("/details")}>
            View More
          </Button>
        </PopoverContent>
      </CarouselItem>
    </Popover>
  );
};
