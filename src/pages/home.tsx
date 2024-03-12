import { MovieCarousel } from "@/components/home/movies-carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Page } from "@/components/ui/page";
import { useMovies } from "@/hooks";
import { FaSearch } from "react-icons/fa";

export const HomePage = () => {
  const { loading, movies, onSearch } = useMovies({
    fetchOnLoad: true,
  });

  return (
    <Page>
      <div className="flex flex-col justify-center items-center space-y-5 w-full mt-20">
        <p className="flex text-white font-bold text-5xl flex flex-col items-center">
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

        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Movie name or release year" />
          <Button className="bg-red-600" onClick={onSearch}>
            <FaSearch className="mr-2" />
            Search
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-white text-xl mb-1">Your List</h1>
        <MovieCarousel movies={movies} isLoading={loading} />
      </div>
    </Page>
  );
};
