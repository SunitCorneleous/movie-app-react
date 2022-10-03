import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-11/12 md:w-10/12 mx-auto">
      <h1 className="text-center text-2xl md:text-4xl font-semibold my-8">
        Movie App 🎥
      </h1>
      <NavBar navOptions={open}></NavBar>
      <Bars3Icon
        className="h-9 w-9  md:hidden"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default Header;
