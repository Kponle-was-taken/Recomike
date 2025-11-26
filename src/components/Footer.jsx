import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
    
        <div className="mb-6 md:mb-0">
          <h3 className="text-3xl text-teal-400 font-sans font-bold mb-2">
            Recomike
            <span className="text-base text-blue-200 font-mono">Ventures</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-md">
            Your trusted partner in animal nutrition and farm supplies. Providing quality feeds and concentrates for healthy growth.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="https://facebook.com/recomike" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300"><FaFacebook size={24} /></a>
          <a href="https://wa.me/2348081733253" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition duration-300"><FaWhatsapp size={24} /></a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          &copy; {currentYear} Recomike Ventures. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;