import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function MovieCard({data}) {
  // Construct the full image URL
  const imageUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  return (
    <section className=" w-[305px] h-[426px]">
      <div classNameName="p-10 w-96  ">
        <div className=" bg-primary border border-primary rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-cover">
          <Link to={`/movies/${data.id}`}>
            <img
              className="rounded-t-lg h-[343px] w-full"
              src={imageUrl}
              alt=""
            />
          </Link>
          <div className="">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white text-secondary mt-2 line-clamp-1">
                {data.title}
              </h5>
            </a>
          </div>
          <hr className=" bg-accent h-[2px] border-none" />
          <div className=" flex justify-between text-white mt-2">
            <div>
              <p>{data.release_date}</p>
            </div>
            {/* Star icon */}
            <StarRating voteAverage={data.vote_average} />
          </div>
        </div>
      </div>
    </section>
  );
}
