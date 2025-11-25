import React from 'react'
import Navbar from '../components/Navbar'
import banner from "../assets/images/banner.png"
import Titlecard from '../components/Title card'

const Home = () => {
  return (
    <>
    <div className='bg-black w-full'>
      <Navbar />
      <Titlecard />

    </div>
    </>
  )
}

export default Home