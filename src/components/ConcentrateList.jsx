import React from 'react';
import { Concentrates } from '../data/data';
import ProductCard from './ProductCard'; 
import { useNavigate } from 'react-router-dom';

const ConcentrateList = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-900 min-h-screen p-4">
            <div className="max-w-7xl mx-auto pt-4">
                <div className="relative text-center py-8">
                    <button onClick={() => navigate(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-150">
                        Back
                    </button>
                    <h1 className='text-4xl md:text-6xl font-bold text-white'>
                        All Concentrates
                    </h1>
                </div>

                <div className='grid md:grid-cols-4 grid-cols-1 gap-8'>
                    {Concentrates.map((concentrateItem) => (
                        <ProductCard key={concentrateItem.id} product={concentrateItem} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConcentrateList;