// import { Typography, Button } from "@material-tailwind/react";
// import React, { useEffect, useState } from "react";
// import MovieCard from "../components/MovieCard";
// import { getOneMovie } from "../features/movie/createAction";
// import { useParams } from "react-router-dom";

// export default function DetailPage() {
//   const param = useParams();
//   console.log("Movie ID from useParams:", param.id);
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     getOneMovie(param.id)
//       .then(response => {
//         setMovie(response);
//         //console.log("Fetched Movie Data:", response);
//       })
//       .catch(error => console.error("Error fetching movie:", error));
//   }, []);

//   if (!movie) {
//     return <div className=" text-center mt-10 text-black">Loading...</div>;
//   }

//   return (
//     <main className="bg-primary">
//       <section className="h-[640px]">
//         <div className="relative h-full w-full">
//           <img
//             src={movie.backdrop_path || "https://via.placeholder.com/1280x720"}
//             alt={movie.title || "Movie Image"}
//             className="h-full w-full object-cover opacity-70"
//           />
//           <div className="grid grid-cols-2">
//             <div className="absolute inset-0 grid h-full w-full place-items-center justify-items-start bg-black/75 p-20">
//               <div className="w-3/4 text-start md:w-2/4">
//                 <Typography
//                   variant="h1"
//                   color="white"
//                   className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//                 >
//                   {movie.title}
//                 </Typography>
//                 <Typography variant="lead" color="white" className="mb-5 opacity-80">
//                   {movie.release_date}
//                 </Typography>
//                 <Typography variant="lead" color="white" className="mb-12 opacity-80">
//                   {movie.overview}
//                 </Typography>
//                 <div className="flex justify-start gap-10">
//                   <Button size="lg" color="white" variant="text" className="border-2 border-white text-white p-5">
//                     Watch Trailer
//                   </Button>
//                   <Button size="lg" color="white" className="flex bg-primary text-accent p-5">
//                     <div className="flex w-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
//                         <path fill="#DEB992" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
//                       </svg>
//                     </div>
//                     Watch Now
//                   </Button>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute inset-0 grid place-items-center justify-items-end px-96">
//               <div className="relative w-[305px] h-[420px]">
//                 <img
//                   src={movie.poster_path || "https://via.placeholder.com/300x400"}
//                   alt={movie.title}
//                   className="w-full h-full object-cover rounded-xl"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#DEB992" className="w-24 h-16">
//                       <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Recommendations */}
//       <section className="bg-primary text-customGray-dark p-4">
//         <h1 className="font-poppins text-accent font-bold text-3xl px-10 mt-5">
//           Recommendations
//         </h1>
//         <div className="grid gap-5 p-10 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm:grid-col-1">
//           <MovieCard  />
//         </div>
//       </section>
//     </main>
//   );
// }

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
    // const fetchMovieDetails = async () => {
    //   try {
    //     const { data } = await axios.get(
    //       `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    //     );
    //     setMovie(data);
    //   } catch (error) {
    //     console.error("Error fetching movie details:", error);
    //   }
    // };

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
