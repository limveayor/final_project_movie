import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function MovieCard({ data }) {
  // Ensure poster path exists, otherwise use a fallback image
  const imageUrl = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image"; // Default image

  return (
    <section className="w-[305px] h-[405px] hover:scale-[1.02] focus:scale-[1.02]">
        <div className="bg-primary border border-primary rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-cover">
          <Link to={`/movies/${data.id}`}>
            <img
              className="rounded-t-lg h-[343px] w-full object-cover"
              src={imageUrl}
              alt={data.title || "Movie Poster"}
            />
          </Link>

          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary mt-2 line-clamp-1">
              {data.title || "Untitled"}
            </h5>
          </div>

          <hr className="bg-accent h-[2px] border-none" />

          <div className="flex justify-between text-white mt-2">
            <p>{data.release_date || "Unknown"}</p>
            {/* Star icon component */}
            <StarRating voteAverage={data.vote_average} />
          </div>
        </div>
    </section>
  );
}
