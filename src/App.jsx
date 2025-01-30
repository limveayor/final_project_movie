// import React, { useEffect, useState } from "react";
// import HomePage from "./pages/HomePage";
// import MovieCard from "./components/MovieCard";
// import Loading from "./components/Loading";


// function App() {
//   const [loading , setLoading] = useState(true);
//   const [movies , setMovies] = useState([]);

//   const getPopularMovie = () =>{
//     fetch(' https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1')
//     .then((response) =>response.json())
//     .then((response) => {
//       setMovies(response)
//       setLoading(false)
//     })
//   }

//   useEffect (() =>{
//     getPopularMovie()
//   },[])
//   return (
//     <main>
//       {/* <HomePage /> */}
//       {loading ? <Loading /> : movies.map((movie)=><MovieCard data={movie}/>)}
//     </main>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import MovieCard from "./components/MovieCard";
import Loading from "./components/Loading";

function App() {
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);

  // const getPopularMovie = () => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1"
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response.results) {
  //         setMovies(response.results); // Set the 'results' array to movies state
  //       } else {
  //         console.error("No results found in the API response");
  //       }
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching movies:", error);
  //       setLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   getPopularMovie();
  // }, []);
  return (
    <main>
      <HomePage />
      {/* {loading ? (
        <Loading />
      ) : (
        movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
      )} */}
    </main>
  );
}

export default App;