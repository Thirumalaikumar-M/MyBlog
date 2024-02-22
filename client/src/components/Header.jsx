import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="max-w-[1140px] m-auto p-3 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        MyBlog
      </Link>
      <nav className="flex gap-4">
        <Link to="/login" className="text-gray-700 hover:text-gray-900">
          Login
        </Link>
        <Link to="/register" className="text-gray-700 hover:text-gray-900">
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
