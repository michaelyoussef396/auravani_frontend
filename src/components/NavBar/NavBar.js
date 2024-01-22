import React from "react";
import './NavBar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'

function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Auravani</p>
            </div>
            <ul className="mav-menu">
                <li>Shop</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
        </div>
    )
}

export default NavBar;