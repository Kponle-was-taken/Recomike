import React, { useState } from 'react';
import { useCart } from '../pages/CartContext.jsx';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const handleAddToCart = (productToAdd) => {
        if (quantity > 0) {
            // Create a more unique ID to prevent collisions between categories
            const uniqueId = `${productToAdd.name.replace(/\s+/g, '-').toLowerCase()}-${productToAdd.id}`;
            addToCart({ ...productToAdd, uniqueId, quantity: quantity });
            setQuantity(0);
        }
    };

    return (
        <div
            className='hover:scale-105 transform transition duration-300 ease-in-out bg-gray-300 p-4 rounded-lg shadow-xl'
        >
            <img src={product.img} alt={product.name} className='w-full h-[220px] object-cover rounded-md mb-3'/>

            <p className='text-black text-center font-bold text-xl mb-1'>{product.name}</p>
            <p className='text-gray-900 font-semibold text-lg text-center mb-4'>₦ {product.price}</p>


            <div className='flex justify-center items-center space-x-2 mb-4'>
                <button
                    onClick={handleDecrement}
                    className='bg-red-500 hover:bg-red-600 text-white font-extrabold w-6 h-6 rounded-full transition duration-150'
                >
                    −
                </button>
                <span className='text-white text-xl font-mono w-8 text-center'>{quantity}</span>
                <button
                    onClick={handleIncrement}
                    className='bg-green-500 hover:bg-green-600 text-white font-extrabold  w-6 h-6 rounded-full transition duration-150'
                >
                    +
                </button>
            </div>


            <button
                onClick={() => handleAddToCart(product)}

                disabled={quantity === 0}
                className={`w-full text-center py-2 rounded-lg font-semibold transition duration-150
                    ${quantity > 0 ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`
                }
            >
                Add {quantity > 0 ? `(${quantity})` : ''} to Cart
            </button>
        </div>
    );
};

export default ProductCard;