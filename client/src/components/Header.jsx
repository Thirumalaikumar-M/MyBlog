import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  const username = userInfo?.username;

  return (
    <header className="mx-auto max-w-7xl p-3 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        MyBlog
      </Link>
      <nav className="flex gap-4">
        {username && (
          <>
            <Link to="/create">Create new Post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              Login
            </Link>
            <Link to="/register" className="text-gray-700 hover:text-gray-900">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
