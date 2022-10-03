import React from "react";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-10/12 mx-auto">
      <h1 className="text-center text-4xl font-semibold my-8">Movie App 🎥</h1>
      <NavBar></NavBar>
    </div>
  );
};

export default Header;
