import { Movie } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { MovieCarouselCard } from "./movies-carousel-card";

interface MovieCarouselProps {
  movies: Movie[];
  isLoading: boolean;
}

export const MovieCarousel = ({ movies, isLoading }: MovieCarouselProps) => {
  if (!isLoading && !movies.length) {
    return <p className="text-white text-2xl text-center">No movies found</p>;
  }

  return (
    <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        {isLoading ? (
          <div className="flex gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} className="w-40 h-56 md:w-60 md:h-80" />
            ))}
          </div>
        ) : (
          movies?.map?.((movie) => (
            <MovieCarouselCard movie={movie} key={movie.imdbID} />
          ))
        )}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};
