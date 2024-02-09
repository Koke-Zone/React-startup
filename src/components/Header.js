import { useState } from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {

  const [loginbtn, setloginbtn] = useState("Login");

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} width={50} height={50} alt="logo" />
        <h1 className="heading">Food Point</h1>
      </div>
      <div className="navigation">
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">ABOUTUS</a>
            </li>
            <li>
              <a href="#">CONTACTUS</a>
            </li>
            <button className="btn-login" onClick={
              () => {
                loginbtn === "Login" ?
                  setloginbtn("logout") : setloginbtn("Login")
                
              }
            }>{loginbtn}
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
