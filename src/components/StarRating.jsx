import { Star } from "lucide-react";
import React from "react";

export default function StarRating({ voteAverage }) {
  const maxStars = 5;
  const rating = (voteAverage / 10) * maxStars;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  return (
    <div className="flex items-center space-x-1">
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="text-yellow-500 fill-yellow-500" />
      ))}
      {/* Render half star if applicable */}
      {hasHalfStar && (
        <Star className="text-yellow-500 fill-yellow-500 opacity-50" />
      )}
      {/* Render empty stars */}
      {[...Array(maxStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={i + fullStars} className="text-gray-400" />
      ))}
    </div>
  );
}
