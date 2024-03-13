import { Button } from "@/components/ui/button";
import { Page } from "@/components/ui/page";
import { useMovieStore } from "@/store/movie.store";
import { FcLike } from "react-icons/fc";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export const MovieDetailsPage = () => {
  const { selectedMovie } = useMovieStore();

  return (
    <Page>
      <div className="flex flex-col space-y-5 w-full mt-20 lg:p-20">
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src={selectedMovie?.Poster}
            alt={selectedMovie?.Title}
            className="object-cover w-full h-40 md:w-1/4 md:h-full shadow-md rounded-md shadow-white"
          />
          <div className="space-y-4">
            <p className="text-2xl text-white font-bold">
              {selectedMovie?.Title}
            </p>
            <p className="flex items-center text-white font-semibold">
              <FcLike className="mr-2" size={16} />
              {selectedMovie?.imdbRating}
            </p>
            <p className="text-white">{selectedMovie?.Plot}</p>
            <p className="text-white">
              <span className="text-white font-semibold">Actors: </span>
              {selectedMovie?.Actors}
            </p>
            <p className="text-white">
              <span className="text-white font-semibold">Director: </span>
              {selectedMovie?.Director}
            </p>
            <p className="text-white">
              <span className="text-white font-semibold">Genre: </span>
              {selectedMovie?.Genre}
            </p>
            <p className="text-white">
              <span className="text-white font-semibold">Release: </span>
              {selectedMovie?.Year}
            </p>
            <div className="flex gap-5">
              <Link to="/">
                <Button variant="outline">
                  <IoMdArrowBack className="mr-2" />
                  Go Back
                </Button>
              </Link>
              <Button className="bg-red-600">
                <FaRegPlayCircle className="mr-2" />
                Watch Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
