import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovieCard } from "../features/movie/createAction";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import { CarouselComponent } from "../components/CarouselComponent";

export default function HomePage() {
  const dispatch = useDispatch();

  // Ensure movieR exists before destructuring
  const {
    movies = [],
    isLoading,
    error,
  } = useSelector((state) => state.movieR || {});
  useEffect(() => {
    dispatch(fetchAllMovieCard());
  }, []);
  console.log("hi", movies.results);

  return (
    <main>
      <section>
        <CarouselComponent />
      </section>

      <section className="bg-primary text-customGray-dark p-4">
        <div className="">
          <h1 className="font-poppins text-accent font-bold text-3xl px-10 mt-5">
            Popular Movies
          </h1>
        </div>
        <div className="overflow-x-auto whitespace-nowrap snap-x p-4 scrollbar-hide">
          <div className="flex gap-5 snap-mandatory">
            {isLoading ? (
              <Loading />
            ) : error ? (
              <p className="text-center text-lg text-red-500">{error}</p>
            ) : movies.length > 0 ? (
              movies.slice(0, 8).map((movie) => (
                <div key={movie.id} className="snap-start">
                  <MovieCard data={movie} />
                </div>
              ))
            ) : (
              <p className="text-center text-lg text-gray-400">
                No movies available
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
