import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function Header() {
  const [btn_nameReact, set_btn_name_react] = useState("Login");

  useEffect(() => {}, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <a>Cart</a>
          </li>
          <button
            onClick={() => {
              btn_nameReact == "Login"
                ? set_btn_name_react("LogOut")
                : set_btn_name_react("Login");
            }}
            className="login"
          >
            {btn_nameReact}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
