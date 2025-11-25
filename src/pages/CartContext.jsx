import React, { createContext, useState, useContext } from 'react';

// 1. Create the context
const CartContext = createContext();

// 2. Create a custom hook for easy access to the context
export const useCart = () => {
    return useContext(CartContext);
};

// 3. Create the provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            // Check if the item is already in the cart
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                // If it exists, update the quantity
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                // If it's a new item, add it to the cart
                return [...prevItems, product];
            }
        });
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    // You can add more functions here like removeFromCart, etc.

    const value = {
        cartItems,
        addToCart,
        emptyCart,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};