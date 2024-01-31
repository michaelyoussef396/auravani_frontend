import React, { useEffect, useState } from "react";
import mens_banner from '../components/Assets/banner_mens.png'
import dropdonw_icon from '../components/Assets/dropdown_icon.png'
import Item from "../components/Items/Items";
import './css/mens.css'  // Use lowercase for CSS folder and filename

const Mens = () => {
    const [mensClothes, setMensClothes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/auravani_collection')
            .then(r => r.json())
            .then(data => {
                const filteredData = data.filter(item => item.category === 'men');
                setMensClothes(filteredData);
            });
    }, []);

    return (
        <div className="mens">
            <img className="mens-banner" src={mens_banner} alt="" />
            <div className="mens-idexSort">
                <p>
                    <span>Showwing 1-12</span> out of 36 products
                </p>
                <div className="mens-sort">
                    Sort by <img src={dropdonw_icon} alt="" />
                </div>
            </div>
            <div className="mens-product">
                {mensClothes.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
            <div className="mens-loadmore">
                Explore More
            </div>
        </div>
    )
}

export default Mens;
