/* eslint-disable no-unused-vars */
// import React from 'react'

import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Home() {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      <div className="bg-green-200 p-56">
        <h1>this is home</h1>
        <div>{navigation.state === "loading" ? "Loading..." : ""}</div>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Home;
