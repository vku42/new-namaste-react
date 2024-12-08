import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function Header() {
  const [btn_nameReact, set_btn_name_react] = useState("Login");

  useEffect(() => {}, []);
  return (
    <div className="flex p-4 justify-between bg-stone-950 text-yellow-50 text-sm  px-14 sm:text-2xl">
      <div className="logo-container">
        <img className="w-[170px]" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex gap-5 p-4 h-[100%] items-center font-normal">
          <li className="hover:text-sky-700 ">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-sky-700">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-sky-700">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-sky-700">
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
