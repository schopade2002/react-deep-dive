import { useState } from "react";
import {LOGO_URL} from "../utils/constants"
const Header = () =>{
    const[btnNameReact,setBtnNameReact]=useState("login")
    // let btnchnage="logout"
    return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-item">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>carts</li>
            <button className="login" onClick = {() => {
              btnNameReact === "login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login")
              }}>{btnNameReact}</button>

        </ul>
      </div>
    </div>
    )
}
export default Header;