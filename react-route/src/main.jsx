import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from "./components/Services/Services.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Home from "./components/Home/Home.jsx";
import Friends from "./components/Friends/Friends";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import App from "./App.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   { path: "/about", element: <div>this is about page</div> },
//   {
//     path: "/aboutUs",
//     element: <AboutUs />,
//   },
//   {
//     path: "/services",
//     element: <Services />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />,
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "friends",
        element: <Friends />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        // dynamical route
        path: "friendDetail/:friendID",
        element: <FriendDetail />,
        // loading data dynamically
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendID}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
