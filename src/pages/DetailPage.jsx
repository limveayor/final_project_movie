import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import MovieCard from "../components/MovieCard";
import { fetchMovieDetails } from "../features/movie/createAction";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const movieId = 76600; // Example movie ID
  const apiKey = "4113f3ad734e747a5b463cde8c55de42";

  useEffect(() => {
    const fetchMovieVideos = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
        );
        const trailerVideo = data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        setTrailer(
          trailerVideo
            ? `https://www.youtube.com/watch?v=${trailerVideo.key}`
            : null
        );
      } catch (error) {
        console.error("Error fetching movie videos:", error);
      }
    };

    dispatchEvent(fetchMovieDetails());
    fetchMovieVideos();
  }, []);

  if (!movie) return <p>Loading...</p>;

  return (
    <main className="bg-primary">
      <section className="h-[640px] relative flex">
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : "https://via.placeholder.com/1280x720"
          }
          alt={movie.title}
          className="h-full w-full object-cover opacity-70"
        />
        <div className=" ">
          <div className="absolute inset-0 grid grid-cols-2 justify-center p-20 bg-black/75 ">
            <div>
            <h1 className="text-white text-4xl font-bold mb-4">
              {movie.title}
            </h1>
            <p className="text-white opacity-80 mb-5">{movie.release_date}</p>
            <p className="text-white opacity-80 mb-12">{movie.overview}</p>
            <div className="flex gap-5 pl-20">
              {trailer && (
                <a href={trailer} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="border-2 border-white text-white p-5"
                  >
                    Watch Trailer
                  </Button>
                </a>
              )}
              <Button size="lg" className="bg-primary text-accent p-5">
                Watch Now
              </Button>
              
            </div>
            </div>
            <div className="relative pl-14"> 
            <img
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                  : "https://via.placeholder.com/1280x720"
              }
              alt={movie.title}
              className=" h-[500px] w-[500px] rounded-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center pr-56" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-14 h-14"><path fill="#FFD43B" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z" /></svg>
            </div>
          </div>
          </div>         
        </div>
      </section>
      <section>
        {/* <MovieCard /> */}
      </section>
    </main>
  );
};

export default MovieDetails;
