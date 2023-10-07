/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

function FriendDetail() {
  const detail = useLoaderData();
  // console.log(detail);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="bg-yellow-100 rounded p-6 m-4 text-center">
        <h1 className="font-bold py-4">Everything detail about this person</h1>
        <p>Address: {detail.address.street}</p>
        <p>Comapany Name: {detail.company.name}</p>
        <p>Website: {detail.website}</p>
        <button onClick={handleGoBack} className="bg-blue-400 w-full p-2 m-3">
          Go Back
        </button>
      </div>
    </>
  );
}

export default FriendDetail;
