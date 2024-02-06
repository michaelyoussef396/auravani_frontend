import React, { useEffect, useState } from "react";
import womens_banner from '../components/Assets/banner_women.png'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from "../components/Items/Items";
import './css/womens.css'

const Womens = () => {
    const [womensClothes, setWomensClothes] = useState([]);

    useEffect(() => {
        fetch('https://auravani-backend.onrender.com/auravani_collection')
            .then(r => r.json())
            .then(data => {
                const filteredData = data.filter(item => item.category === 'women');
                setWomensClothes(filteredData);
            });
    }, []);

    return (
        <div className="womens">
            <img src={womens_banner} alt="" />
            <div className="womens-indexSort">
                <p>
                    <span>Showing 1-12</span> out of {womensClothes.length} products
                </p>
                <div className="womens-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="womens-product">
                {womensClothes.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
            <div className="womens-loadmore">
                Explore More
            </div>
        </div>
    )
}

export default Womens;
