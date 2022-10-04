import React from "react";

const Show = ({ show }) => {
  const poster = `https://image.tmdb.org/t/p/original/${show.poster_path}`;

  return (
    <div className="card w-2/10 bg-base-100 shadow-xl">
      <figure>
        <img src={poster} alt="movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {show.title}
          <div className="badge badge-secondary">{show.vote_average}</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Show;
