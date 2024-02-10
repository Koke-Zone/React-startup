import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyResturanat from "./components/BodyResturanat";
import ResturantDetails from "./components/ResturantDetails";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const MainFunction = () => {
  return (
    <div className="main">
      {/* all 3 ways are same to call functional componenets */}
      <Header />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainFunction />,
    children: [
      {
        path: "/",
        element: <BodyResturanat />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturants/:resId",
        element: <ResturantDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
