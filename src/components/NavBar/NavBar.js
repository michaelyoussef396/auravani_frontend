import React, { useState } from "react";
import './NavBar.css'
import cart_icon from '../Assets/cart_icon.png'

function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <p>Auravani</p>
            </div>

            <ul className="nav-menu">
                <li>Shop <hr /></li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>

            <div className="nav-login-cart">
                <button>login</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default NavBar;