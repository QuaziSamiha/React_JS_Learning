/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="mb-24 p-6 bg-yellow-100 w-auto">
        <Link className="px-6" to="/">
          Home
        </Link>
        <Link className="px-6" to="/login">
          Login
        </Link>
      </nav>
      <h1 className="text-blue-500">this is header</h1>
    </>
  );
}

export default Header;
