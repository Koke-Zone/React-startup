import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyResturanat from "./components/BodyResturanat";
import ResturantDetails from "./components/ResturantDetails";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
// import Grocery from "./components/Grocery";
import UserContext from "./components/utilis/userContext";
import { Provider } from "react-redux";

const Grocery = lazy(()=> import('./components/Grocery'));

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "./components/utilis/appStore";
import Cart from "./components/Cart";

const MainFunction = () => {

  const [userName, setUserName] = useState();

useEffect(() => {
    const data = {
    name: "Sunny Sagar",
  }
  setUserName(data.name);
},[]);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedUser:userName}}>
    <div className="main">
      {/* all 3 ways are same to call functional componenets */}
      <UserContext.Provider value={{loggedUser:"Sanaullah"}}>
      <Header />
      </UserContext.Provider>
      <Outlet />
      <Footer></Footer>
    </div>
    </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/resturants/:resId",
        element: <ResturantDetails />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback = { <div> Please Wait... </div> } ><Grocery /></Suspense>
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
