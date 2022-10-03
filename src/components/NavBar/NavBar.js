import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="flex">
      <li className="mx-3 text-xl">
        <Link to="/home">Home</Link>
      </li>
      <li className="mx-3 text-xl">
        <Link to="/movies">Movies</Link>
      </li>
      <li className="mx-3 text-xl">
        <Link to="/tvseries">Tv Series & Shows</Link>
      </li>
    </ul>
  );
};

export default NavBar;
