import React from "react";
import '../Popular/popular.css'
import sample_popular_data from "../Assets/sample_data";
import Item from "../Items/Items";

const Popular = () => {
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {/* add the popularitems from backend here when teh server is running*/}
                {sample_popular_data.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular;