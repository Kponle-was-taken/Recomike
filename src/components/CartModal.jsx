import React from 'react';
import Modal from './Modal.jsx'; // Reusing your existing Modal structure
import { useCart } from '../pages/CartContext.jsx';

const CartModal = ({ isOpen, onClose }) => {
    const { cartItems, emptyCart } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleEmptyCart = () => {
        emptyCart();
        onClose(); // Close the modal after emptying the cart
    };

    const handleProceedToCheckout = () => {
        // --- Replace this with your WhatsApp number ---
        const whatsappNumber = '2348081733253'; // Use your full number with country code, without '+' or spaces

        // Create the order summary message
        const orderItems = cartItems.map(item => 
            `- ${item.name}: ${item.quantity} x ₦${item.price} = ₦${item.quantity * item.price}`
        ).join('\n');

        const totalAmount = calculateTotal();

        const message = `Hello Recomike Ventures,

I would like to place an order for the following items:

${orderItems}

*Total: ₦${totalAmount}*

Thank you!`;

        // Create the WhatsApp URL and open it in a new tab
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Your Cart</h3>
            {cartItems.length === 0 ? (
                <p className="text-gray-400 text-center">Your cart is empty.</p>
            ) : (
                <>
                    <div className="max-h-60 overflow-y-auto mb-4 pr-2">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center border-b border-gray-700 py-2">
                                <span className="text-white flex-1 truncate pr-2">{item.name}</span>
                                <span className="text-gray-400 text-sm w-24 text-center">{item.quantity} x ₦{item.price}</span>
                                <span className="text-white font-semibold">₦{item.quantity * item.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center border-t border-gray-700 pt-4 mt-4">
                        <span className="text-xl font-bold text-white">Total:</span>
                        <span className="text-xl font-bold text-green-400">₦{calculateTotal()}</span>
                    </div>
                    <div className="flex flex-col gap-3 mt-6">
                        <button
                            onClick={handleProceedToCheckout}
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150"
                        >
                            Proceed to Checkout
                        </button>
                        <button
                            onClick={onClose} // Just close the modal
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150"
                        >
                            Continue Shopping
                        </button>
                        <button
                            onClick={handleEmptyCart}
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150"
                        >
                            Empty Cart
                        </button>
                    </div>
                </>
            )}
        </Modal>
    );
};

export default CartModal;