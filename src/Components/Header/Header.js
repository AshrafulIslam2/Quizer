import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/statistics">Statistics</Link>
      </ul>
    </div>
  );
};

export default Header;
