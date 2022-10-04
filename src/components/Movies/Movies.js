import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowContainer from "../ShowContainer/ShowContainer";

const Movies = () => {
  const { results } = useLoaderData();

  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <h1 className="text-3xl text-orange-600 font-semibold">Popular Movies</h1>
      <ShowContainer shows={results}></ShowContainer>
    </div>
  );
};

export default Movies;
