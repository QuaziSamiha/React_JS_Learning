/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Friend({ friend }) {
  //   console.log(friend);
  const { phone, name, id, email } = friend;

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/friendDetail/${id}`);
  };
  return (
    <>
      <div
        className="bg-yellow-100 rounded p-3 text-center
      "
      >
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <NavLink to={`/friendDetail/${id}`}>
          <span className="text-blue-700">Show Me Details</span>
        </NavLink>
        <br />
        <NavLink to={`/friendDetail/${id}`}>
          <button className="bg-yellow-500 text-white p-4 m-3 rounded">
            Details
          </button>
        </NavLink>
        <br />
        <button
          className="m-2 p-2 bg-purple-400 rounded w-full"
          onClick={handleNavigation}
        >
          Details Please
        </button>
      </div>
    </>
  );
}

export default Friend;
