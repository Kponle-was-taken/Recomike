import React from 'react';
import { FeedsData } from "../data/data";
import ProductCard from './ProductCard'; 
import { useNavigate } from 'react-router-dom'; 

const FeedListFull = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 min-h-screen p-4">
      <div className="max-w-7xl mx-auto pt-4">
        <div className="relative text-center py-8">
            <button onClick={() => navigate(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-500 hover:bg-gray-600  text-white font-semibold py-2 px-4 rounded-lg transition duration-150">
              Back
            </button>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Feeds</h1>
        </div>
        
        
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
          {FeedsData.map((feed) => (
            <ProductCard key={feed.id} product={feed} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeedListFull