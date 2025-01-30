// import React, { useEffect, useState } from "react";
// import { CarouselComponent } from "../components/CarouselComponent";
// import MovieCard from "../components/MovieCard";
// import React from "react";
// import Loading from "../components/Loading";

// export default function HomePage() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);

//   const getPopularMovie = () => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1"
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         if (response.results) {
//           setMovies(response.results); // Set the 'results' array to movies state
//         } else {
//           console.error("No results found in the API response");
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching movies:", error);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     getPopularMovie();
//   }, []);
//   return (
//     <main>
//       <section>
//         <CarouselComponent />
//       </section>
//       <section className="bg-primary text-customGray-dark p-4">
//         <h1 className=" font-poppins text-accent font-bold text-3xl px-10 mt-5">
//           Popular Movie
//         </h1>
//         <div className=" grid gap-5 p-10 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm:grid-col-1">
//           {loading ? (
//             <Loading />
//           ) : (
//             movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
//           )}
//         </div>
//         <h1 className=" font-poppins text-accent font-bold text-3xl px-10 mt-5">
//           Hollywood
//         </h1>
//         <div className=" grid gap-5 p-10 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm:grid-col-1">
//           {/* <MovieCard />
//           <MovieCard />
//           <MovieCard />
//           <MovieCard />
//           <MovieCard /> */}
//         </div>
//         <h1 className=" font-poppins text-accent font-bold text-3xl px-10 mt-5">
//           Anime
//         </h1>
//         <div className=" grid gap-5 p-10 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm:grid-col-1">
//           {/* <MovieCard />
//           <MovieCard />
//           <MovieCard />
//           <MovieCard />
//           <MovieCard /> */}
//         </div>
//         <h1 className=" font-poppins text-accent font-bold text-3xl px-10 mt-5">
//           Upcoming Movie
//         </h1>
//         <div className=" grid gap-5 p-10 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm:grid-col-1">
//           {/* <MovieCard />
//           <MovieCard />
//           <MovieCard />
//           <MovieCard />
//           <MovieCard /> */}
//         </div>
//       </section>
//     </main>
//   );
// }

import React, { useEffect, useState } from "react";
import { CarouselComponent } from "../components/CarouselComponent";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getPopularMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.results) {
          setMovies(response.results); // Set the 'results' array to movies state
        } else {
          console.error("No results found in the API response");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPopularMovie();
  }, []);

  return (
    <main>
      <section>
        <CarouselComponent />
        {/* {loading ? (
          <Loading />
        ) : (
          movies.map((movie) => 
            <CarouselComponent key={movie.id} data={movie} />
          )
        )} */}
      </section>
      <section className="bg-primary text-customGray-dark p-4">
        <h1 className="font-poppins text-accent font-bold text-3xl px-10 mt-5">
          Popular Movie
        </h1>
        {/* <div className=" snap-x">
        <div className="grid gap-5 p-10 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm:grid-cols-1 snap-start scroll-ml-6 grid-rows-1 ">
          {loading ? (
            <Loading />
          ) : (
            movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
          )}
        </div>
        </div> */}
        <div className="overflow-x-auto whitespace-nowrap snap-x p-4 scrollbar-hide">
          <div className="flex gap-5 snap-mandatory">
            {loading ? (
              <Loading />
            ) : (
              movies.map((movie) => (
                <div key={movie.id} className="snap-start">
                  <MovieCard data={movie} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
