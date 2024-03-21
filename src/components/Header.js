import { useState, useContext } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utilis/useOnlineStatus";
import UserContext from "./utilis/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");
  const status = useOnlineStatus();

  const { loggedUser } = useContext(UserContext);

  const itemsLength = useSelector((store) => store.cart.item);
  console.log(itemsLength);

  return (
    <header className="header flex items-center justify-between bg-cyan-700">
      <div className="logo flex items-center">
        <Link to="/">
          <img src={logo} className="w-20 p-2 m-2" alt="logo" />
        </Link>
        <Link to="/">
          <h1 className="heading font-extrabold font-dancingScript text-4xl text-yellow-50 border-transparent pb-2">
            Food Point
          </h1>
        </Link>
      </div>
      <div className="navigation">
        <nav className="nav-bar">
          <ul className="flex justify-between items-center p-4 m-4">
            <li className="p-2 m-2 font-dancingScript font-semibold text-yellow-50">
              Online Status: {status ? "💚" : "💓"}
            </li>
            <li className="p-2 m-2">
              <Link
                to="/"
                className="font-semibold text-yellow-50 border-transparent pb-2 border-b-2 hover:border-customPink"
              >
                HOME
              </Link>
            </li>
            <li className="p-2 m-2">
              <Link
                to="/service"
                className="font-semibold text-yellow-50 border-transparent pb-2 border-b-2 hover:border-customPink"
              >
                SERVICES
              </Link>
            </li>
            <li className="p-2 m-2">
              <Link
                to="/about"
                className="font-semibold text-yellow-50 border-transparent pb-2 border-b-2 hover:border-customPink"
              >
                ABOUT US
              </Link>
            </li>
            <li className="p-2 m-2">
              <Link
                to="/contact"
                className="font-semibold text-yellow-50 border-transparent pb-2 border-b-2 hover:border-customPink"
              >
                CONTACT US
              </Link>
            </li>
            <li className="p-2 m-2">
              <Link
                to="/grocery"
                className="font-semibold text-yellow-50 border-transparent pb-2 border-b-2 hover:border-customPink"
              >
                GROCERY
              </Link>
            </li>
            <button
              className="font-dancingScript font-semibold text-yellow-50 border-transparent bg-customPink p-4 w-auto"
              onClick={() => {
                loginbtn === "Login"
                  ? setloginbtn("logout")
                  : setloginbtn("Login");
              }}
            >
              {loginbtn}
            </button>
            <li className="p-2 m-2">
              <Link
                to="/cart"
                className="font-semibold text-yellow-50 border-transparent pb-2 border-b-2 hover:border-customPink"
              >
                Cart ({itemsLength.length})
              </Link>
            </li>
            <li className="p-2 m-2">
              <span className="font-semibold text-yellow-50">{loggedUser}</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
