import React from 'react';
import banner from '../assets/images/banner.png';

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-24 px-10 object-bottom"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Quality Feeds for Healthy Growth
        </h1>
        <p className="text-lg md:text-xl mb-8">Your trusted partner in animal nutrition and farm supplies.</p>
        <a href="#categories" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 shadow-lg">Shop Now</a>
      </div>
    </div>
  );
};

export default Hero;