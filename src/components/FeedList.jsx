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
      <div className="relative text-center py-8">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-500 hover:bg-gray-600  text-white font-semibold py-2 px-4 rounded-lg transition duration-150"
        >
          Back
        </button>
        <h1 className="text-4xl md:text-6xl font-bold text-white">Feeds</h1>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {limitedFeeds.map((feedItem) => (
          <ProductCard key={feedItem.id} product={feedItem} />
        ))}
      </div>
      {FeedsData.length > itemsToShow && (
        <div className="text-center py-8">
          <button
            onClick={handleSeeMoreClick}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
          >
            See All Feeds
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedList;
