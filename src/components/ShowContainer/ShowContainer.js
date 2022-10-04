import React from "react";
import Show from "../Show/Show";

const ShowContainer = ({ shows }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 my-8">
      {shows.map(show => (
        <Show key={show.id} show={show}></Show>
      ))}
    </div>
  );
};

export default ShowContainer;
