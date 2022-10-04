import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ navOptions }) => {
  return (
    <ul
      className={`bg-base-300 z-10 md:bg-base-100 md:flex absolute  md:static ease-in duration-300 ${
        navOptions ? "left-0 top-0 h-full" : "left-[-240px] top-0 h-full"
      }`}
    >
      <li className="md:mx-3 text-xl md:my-8 my-20 px-7">
        <Link to="/home">Home</Link>
      </li>
      <li className="md:mx-3 text-xl md:my-8 my-20 px-7">
        <Link to="/movies">Movies</Link>
      </li>
      <li className="md:mx-3 text-xl md:my-8 my-20 px-7">
        <Link to="/tvseries">Tv Series & Shows</Link>
      </li>
    </ul>
  );
};

export default NavBar;
