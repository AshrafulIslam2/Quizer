import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow-xl bg-cyan-200 flex items-center">
      <h1 className="w-52 ml-2">Ash Quizer</h1>
      <ul className="bg-cyan-200 p-2 text-end w-full">
        <Link className="pr-2 hover:bg-teal-600" to="/">
          Home
        </Link>
        <Link className="pr-2 hover:bg-teal-600" to="/blogs">
          Blogs
        </Link>
        <Link className="pr-2 hover:bg-teal-600" to="/statistics">
          Statistics
        </Link>
      </ul>
    </div>
  );
};

export default Header;
