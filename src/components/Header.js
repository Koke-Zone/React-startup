import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom"; 

const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");

  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><img src={logo} width={50} height={50} alt="logo" /></Link>
        <Link to="/"><h1 className="heading">Food Point</h1></Link>
      </div>
      <div className="navigation">
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/service">SERVICES</Link>
            </li>
            <li>
              <Link to="/about">ABOUTUS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACTUS</Link>
            </li>
            <button
              className="btn-login"
              onClick={() => {
                loginbtn === "Login"
                  ? setloginbtn("logout")
                  : setloginbtn("Login");
              }}
            >
              {loginbtn}
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
