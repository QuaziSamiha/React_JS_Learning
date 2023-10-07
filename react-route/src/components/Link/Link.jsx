/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";

import { NavLink } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

// eslint-disable-next-line react/prop-types
function Link({ route }) {
  return (
    <>
      <li className="mr-10">
        {/* // eslint-disable-next-line react/prop-types */}
        <NavLink to={route.path}>{route.name}</NavLink>
        <ActiveLink to={route.path}>{route.name}</ActiveLink>
        {/* <a href={route.path}>{route.name}</a> */}
      </li>
    </>
  );
}

export default Link;
