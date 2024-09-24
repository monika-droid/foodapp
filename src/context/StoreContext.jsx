import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});

    const addToCart = (itemId) => {
        setCartItem((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItem((prev) => {
            const newCount = prev[itemId] - 1;
            if (newCount <= 0) {
                const { [itemId]: _, ...rest } = prev; 
                return rest;
            }
            return { ...prev, [itemId]: newCount };
        });
    };

    useEffect(() => {
        console.log(cartItem);
    }, [cartItem]);

    const contextValue = {
        food_list,
        cartItem,
        addToCart,
        removeFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
