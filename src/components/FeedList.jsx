import React from "react";
import { useNavigate } from "react-router-dom";
import { FeedsData } from "../data/data";
import ProductCard from "./ProductCard";

const FeedList = () => {
  const itemsToShow = 6;
  const limitedFeeds = FeedsData.slice(0, itemsToShow);
  
  
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    
    navigate("/feeds-full");
  };
  return (
    <div id="feeds-section">
      <h2 className="text-center text-6xl font-bold text-white py-5">FEEDS</h2>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {limitedFeeds.map((feedItem) => (
          <ProductCard key={feedItem.id} product={feedItem} />
        ))}
      </div>
      {FeedsData.length > itemsToShow && (
        <div className="text-center py-8">
         
          <button 
            onClick={handleSeeMoreClick} 
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
            See All Feeds
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedList;
