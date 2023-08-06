import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  const updateBtn = (event) => {
    event.preventDefault();
    setBtn((prevState) => (prevState === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="home-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button onClick={(event) => updateBtn(event)}>{btn}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
