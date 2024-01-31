import React from "react";
import '../NewsLetter/NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h1>Get Exclisive Ofeers on your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type='text' placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default  NewsLetter;