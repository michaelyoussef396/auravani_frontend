import React, { useEffect, useState } from "react";
import '../NewCollections/NewCollection.css'
import Item from "../Items/Items";

const NewCollections = () => {
    const [newCollection, setNewCollection] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/auravani_new_collection')
        .then(r => r.json())
        .then(data => setNewCollection(data))
    }, []);

    return (
        <div className="new-collection">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {newCollection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default NewCollections;