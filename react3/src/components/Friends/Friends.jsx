/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";

function Friends() {
  const friends = useLoaderData();
  //   console.log(friends);
  return (
    <>
      <div className="bg-yellow-300 p-12 m-12">
        <h1>this is friend</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {friends.map((friend) => (
            <Friend key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Friends;
