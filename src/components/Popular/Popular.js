import React, { useEffect, useState } from "react";
import '../Popular/popular.css'
import Item from "../Items/Items";

const Popular = () => {
    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {
        fetch('https://auravani-backend.onrender.com/auravani_popular')
            .then(r => r.json())
            .then(data => setPopularItems(data))
    })

    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularItems.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular;