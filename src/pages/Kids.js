import React, { useEffect, useState } from "react";
import kids_banner from '../components/Assets/banner_kids.png';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from "../components/Items/Items";
import './css/kids.css';

const Kids = () => {
    const [kidsClothes, setKidsClothes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/auravani_collection')
            .then(r => r.json())
            .then(data => {
                const filteredData = data.filter(item => item.category === 'kids');
                setKidsClothes(filteredData);
            });
    }, []);

    return (
        <div className="kids">
            <img src={kids_banner} alt="" className="kids-banner" />
            <div className="kids-indexSort">
                <p>
                    <span>Showing 1-12</span> out of {kidsClothes.length} products
                </p>
                <div className="kids-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="kids-product">
                {kidsClothes.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
            <div className="kids-loadmore">
                Explore More
            </div>
        </div>
    );
}

export default Kids;
