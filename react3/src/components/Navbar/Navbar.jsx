// import React from 'react'

import { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About Us", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Services", path: "/services" },
  ];

  return (
    <>
      <nav className="bg-purple-400">
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* <span>{isOpen === false ? "close" : "open"}</span>
          <Bars3Icon className="h-6 w-6 mx-10 text-purple-500" /> */}

          <span>
            {isOpen === false ? (
              <Bars3Icon className="h-6 w-6 mx-10" />
            ) : (
              <XMarkIcon className="h-6 w-6 mx-10" />
            )}
          </span>
        </div>

        <ul
          className={`md:flex absolute md:static duration-500 bg-purple-400 w-full pl-10 py-5 ${
            isOpen ? "top-6" : "-top-48"
          }`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route} />
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
