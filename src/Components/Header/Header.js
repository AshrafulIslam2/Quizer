import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="bg-cyan-200 p-4 text-end w-auto">
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
