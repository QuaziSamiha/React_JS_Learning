/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function Main() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
}

export default Main;
