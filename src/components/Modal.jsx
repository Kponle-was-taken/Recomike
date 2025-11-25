import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        // Backdrop: A semi-transparent background that covers the page
        <div 
            onClick={onClose} // Close the modal if the backdrop is clicked
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center transition-opacity duration-300"
        >
            {/* Modal Content Box */}
            <div 
                onClick={e => e.stopPropagation()} // Prevents clicks inside the modal from closing it
                className="bg-gray-800 text-white p-6 rounded-lg shadow-xl relative max-w-sm w-full mx-4"
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-400 hover:text-white text-3xl font-light"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;