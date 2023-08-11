import { useState } from "react";
import logo from "../../src/logo.png";
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
    <div className="flex justify-between h-24 shadow-lg mb-2">
      <div>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img className="w-24 h-[100%] p-2" src={logo} alt="home-logo" />
        </Link>
      </div>
      <div>
        <ul className="flex m-4 p-4 items-center">
          <li className="m-2">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="m-2">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="p-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="p-4">Cart</li>
          <li className="p-4">
            <button onClick={(event) => updateBtn(event)}>{btn}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
