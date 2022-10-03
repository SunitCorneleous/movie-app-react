import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ navOptions }) => {
  return (
    <ul
      className={`bg-base-300 md:bg-base-100 md:flex absolute  md:static ease-in duration-300 ${
        navOptions ? "left-0 top-0 h-full" : "left-[-200px] top-0 h-full"
      }`}
    >
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
