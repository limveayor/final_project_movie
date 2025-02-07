import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovieCard, fetchTopRatedMovieCard, fetchUpcomingMovieCard } from "../features/movie/createAction";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import { CarouselComponent } from "../components/CarouselComponent";

export default function HomePage() {
  const dispatch = useDispatch();
  const movieState = useSelector((state) => state.movieR);
  console.log("Redux Movie State h:",movieState);
  // Ensure movieR exists before destructuring
  const {movies = [],isLoading,error, topRateMovie = {},upcomingMovie ={} } = useSelector((state) => state.movieR || {});
  console.log("lllllllllllllllllll",topRateMovie.results);
  

  useEffect(() => {
    dispatch(fetchAllMovieCard());
    dispatch(fetchUpcomingMovieCard());
    dispatch(fetchTopRatedMovieCard());
  }, []);
  //console.log("hi", movies.results);
  //console.log("Data upcoming movie", upcomingMovie.results);

  return (
    <main>
      <section>
        <CarouselComponent />
      </section>

      <section className="bg-primary text-customGray-dark p-4">
        <h1 className="font-poppins text-accent font-bold text-3xl mt-5">
          Popular Movies
        </h1>
        <div className="overflow-x-auto whitespace-nowrap snap-x p-7 scrollbar-hide">
          <div className="flex gap-5 snap-mandatory">
            {isLoading ? (
              <Loading />
            ) : error ? (
              <p className="text-center text-lg text-red-500">{error}</p>
            ) : movies.length > 0 ? (
              movies.slice(0, 8).map((movie) => (
                <div className="snap-start">
                  <MovieCard key={movie.id} data={movie} />
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
      {/* TopRate Card */}
      <section className="bg-primary text-customGray-dark p-4">
        <h1 className="font-poppins text-accent font-bold text-3xl  mt-5">
          Top Rate Movies
        </h1>
        <div className="overflow-x-auto whitespace-nowrap snap-x p-7 scrollbar-hide">
          <div className="flex gap-5 snap-mandatory">
            {isLoading ? (
              <Loading />
            ) : error ? (
              <p className="text-center text-lg text-red-500">{error}</p>
            ) : topRateMovie.length > 0 ? (
              topRateMovie.slice(0, 8).map((movie) => (
                <div key={movie.id} className="snap-start">
                  <MovieCard  data={movie} />
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
      {/* Upcoming Card */}
      <section className="bg-primary text-customGray-dark p-4">
        <h1 className="font-poppins text-accent font-bold text-3xl mt-5">
          Upcoming Movies
        </h1>
        <div className="overflow-x-auto whitespace-nowrap snap-x p-7 scrollbar-hide pl-10">
          <div className="flex gap-5 snap-mandatory">
            {isLoading ? (
              <Loading />
            ) : error ? (
              <p className="text-center text-lg text-red-500">{error}</p>
            ) : upcomingMovie.length > 0 ? (
              upcomingMovie.slice(0, 8).map((movie) => (
                <div className="snap-start">
                  <MovieCard key={movie.id} data={movie} />
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
