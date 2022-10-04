import React from "react";
import { useLoaderData } from "react-router-dom";

const Movies = () => {
  const popularMovies = useLoaderData();

  console.log(popularMovies);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <h1 className="text-center text-3xl">
        This is the <span className="text-red-500">movies</span> page
      </h1>
    </div>
  );
};

export default Movies;
