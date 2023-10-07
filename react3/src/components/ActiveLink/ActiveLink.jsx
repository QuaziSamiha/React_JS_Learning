/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

function ActiveLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "bg-yellow-200" : "")}
    >
      {children}
    </NavLink>
  );
}

export default ActiveLink;
