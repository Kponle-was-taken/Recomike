import React from 'react'
import { Link } from 'react-router-dom';
import ProductList from '../pages/Products';


const Titlecard = () => {
  return (
    <>
        <ProductList />
        <Link to="" className='flex justify-center py-5'>
            <button className='text-xl font-semibold bg-green-600 p-2 rounded-2xl cursor-pointer'>See More</button>
        </Link>
    </>
  )
}

export default Titlecard