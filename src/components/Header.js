import logo from "../../assets/images/logo.png";

const Header = () => {
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
