import React from "react";
import './css/loginsignup.css'
const LoginSignup = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Contuine</button>
                <p className="loginsignup-login">Already have an accoount? <span>Login Here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By Contuining, i agree to the terms and use & privacy policy</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;