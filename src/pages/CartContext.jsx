import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            
            const existingItem = prevItems.find(item => item.uniqueId === product.uniqueId);

            if (existingItem) {
                
                return prevItems.map(item =>
                    item.uniqueId === product.uniqueId
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                
                return [...prevItems, product];
            }
        });
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    const removeFromCart = (uniqueId) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.uniqueId !== uniqueId)
        );
    };


    const value = {
        cartItems,
        addToCart,
        emptyCart,
        removeFromCart,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};