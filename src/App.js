import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyResturanat from "./components/BodyResturanat";
import Footer from "./components/Footer";

const MainFunction = () => {
  return (
    <div className="main">
      {/* all 3 ways are same to call functional componenets */}
      <Header />
      {BodyResturanat()}
      <Footer></Footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainFunction />);
