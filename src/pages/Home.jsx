import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeedList from '../components/FeedList'; 
import ConcentrateList from '../components/ConcentrateList'; 
import { FaWarehouse, FaTractor, FaSeedling } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <div className='bg-slate-900 w-full min-h-screen'>
        <Hero />

        <div className="py-16 px-4">
          {/* Categories Section */}
          <h2 className="text-center text-4xl font-bold text-white mb-10">Our Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <Link to="/feeds" className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition duration-300">
              <FaWarehouse className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">FEEDS</h3>
            </Link>
            <Link to="/concentrates" className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition duration-300">
              <FaSeedling className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">CONCENTRATES</h3>
            </Link>
            <Link to="/farm-items" className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition duration-300">
              <FaTractor className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">FARM ITEMS</h3>
            </Link>
          </div>
        </div>

        <div id='categories' className="bg-slate-950 py-16 px-4">
          <FeedList /> 
          <ConcentrateList /> 
        </div>
      </div>
    </>
  );
};

export default Home;