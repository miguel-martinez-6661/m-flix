import { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Movie } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { getMovieById } from "@/controllers/movie-controller";
import { useMovieStore } from "@/store/movie.store";

interface MovieCarouselProps {
  movies: Movie[];
  isLoading: boolean;
}

const MovieCard = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();
  const { setSelectedMovie } = useMovieStore();
  const [movieInfo, setMovieInfo] = useState<Movie | null>(null);

  const fetchMovie = async () => {
    const result = await getMovieById(movie.imdbID);
    setMovieInfo(result);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <CarouselItem
      className="pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6 xl:basis-1/8 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out rounded-md overflow-hidden"
      key={movie.imdbID}
      onClick={() => {
        setSelectedMovie(movieInfo as Movie);
        navigate("/details");
      }}
    >
      <div className="flex flex-col w-full">
        <img
          src={movieInfo?.Poster}
          alt={movieInfo?.Title}
          className="object-cover w-full h-54 md:h-82"
        />
        <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black w-[250px] h-2/3 p-1">
          <div className="absolute bottom-10">
            <p className="text-white font-semibold text-sm mt-2">
              {movieInfo?.Title}
            </p>
            <div className="flex items-center gap-2">
              <FcLike className="text-white" size={16} />
              <p className="text-white text-sm">{movieInfo?.imdbRating}</p>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};

export const MovieCarousel = ({ movies, isLoading }: MovieCarouselProps) => {
  if (isLoading) {
    return (
      <Carousel>
        <CarouselContent>
          {[...Array(6)].map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6 xl:basis-1/8"
            >
              <Skeleton className="w-full h-54 md:h-82 rounded-xl" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  }

  return (
    <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        {movies?.map?.((movie) => <MovieCard movie={movie} />)}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};
