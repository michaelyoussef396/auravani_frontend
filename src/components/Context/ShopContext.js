import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [contextValue, setContextValue] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/auravani_collection')
        .then(r => r.json())
        .then(data => setContextValue(data))
    }, []);

    return(
        <ShopContext.Provider value={[contextValue, setContextValue]}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
