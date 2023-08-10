import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const updateBtn = (event) => {
    event.preventDefault();
    setBtn((prevState) => (prevState === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className="header">
      <div className="logo-container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img className="logo" src={LOGO_URL} alt="home-logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          {console.log(onlineStatus)}
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
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
