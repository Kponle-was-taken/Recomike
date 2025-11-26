import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { useLocation } from "react-router-dom";
import { useCart } from "../pages/CartContext.jsx";
import CartModal from "./CartModal.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useCart();
  const location = useLocation(); 
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  return (
    <>
      <div className="bg-slate-950/80 backdrop-blur-sm sticky top-0 z-40 p-4">
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
              <Link to="/feeds-full">
                <li className="hover:bg-white hover:text-black cursor-pointer p-2">
                  FEEDS
                </li>
              </Link>
              <Link to="/concentrates">
                <li className="hover:bg-white hover:text-black cursor-pointer p-2">
                  CONCENTRATES
                </li>
              </Link>
              <li className="hover:bg-white hover:text-black cursor-pointer p-2 opacity-50">
                FARM ITEMS
              </li>
            </ul>
          </div>
          <h1 className="md:text-4xl text-2xl text-teal-400 font-sans font-bold">
            Recomike
            <span className="md:text-xl text-sm text-blue-200 font-mono">
              Ventures
            </span>{" "}
          </h1>
          <input
            type="text"
            className="Search-bar bg-white focus:outline-0 rounded-xl pl-4 hidden md:block"
            placeholder="Search Products..."
          />
          <div className="flex items-center gap-5">
            <button className="relative" onClick={() => setIsCartModalOpen(true)}>
              <TiShoppingCart size={30} className="text-white" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <a 
              href="https://wa.me/2348081733253" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} className="text-green-500 hover:text-green-400" />
            </a>
          </div>
        </div>
      </div>
      <CartModal isOpen={isCartModalOpen} onClose={() => setIsCartModalOpen(false)} />
    </>
  );
};

export default Navbar;
