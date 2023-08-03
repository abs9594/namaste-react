import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btn, setBtn] = useState("Login");

    const updateBtn = (event) => {
        event.preventDefault()
        setBtn(prevState=>prevState==="Login"?"Logout":"Login")
    };

    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="home-logo"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <li><button onClick={event=>updateBtn(event)}>{btn}</button></li>
            </ul>
        </div>
    </div>
)
};

export default Header;