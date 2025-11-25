import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "../pages/CartContext.jsx";
import CartModal from "./CartModal.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  return (
    <>
      <div className="bg-transparent p-4">
        <div className="flex justify-between">
          <div className="dropdown block md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-l dropdown-content bg-black text-white z-1 mt-3 w-32 p-2 shadow"
            >
             <Link to ="/Titlecard">
              <li className="hover:bg-white hover:text-black cursor-pointer">
                FEEDS
              </li>
             </Link>
              <li className="hover:bg-white hover:text-black cursor-pointer">
                CONCENTRATES
              </li>
              <li className="hover:bg-white hover:text-black cursor-pointer">
                FARM ITEMS
              </li>
            </ul>
          </div>
          <h1 className="text-2xl text-green-700 font-sans font-bold">
            Recomike
            <span className="text-sm text-blue-200 font-mono">
              Ventures
            </span>{" "}
          </h1>
          <input
            type="text"
            className="Search-bar bg-white focus:outline-0 rounded-xl pl-4 hidden md:block"
            placeholder="Search Products..."
          />
          <div className="flex gap-5">
            <button className="relative" onClick={() => setIsCartModalOpen(true)}>
              <TiShoppingCart size={30} className="text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <a 
              href="https://wa.me/2348081733253" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} className="text-green-600" />
            </a>
          </div>
        </div>
      </div>
      <CartModal isOpen={isCartModalOpen} onClose={() => setIsCartModalOpen(false)} />
    </>
  );
};

export default Navbar;
