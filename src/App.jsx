import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FeedList from './components/FeedList'
import ConcentrateList from './components/ConcentrateList'
import Home from './pages/Home'
import FeedListFull from './components/FeedListFull'
import Footer from './components/Footer' 
import Navbar from './components/Navbar'

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ="/feeds" element ={<FeedList />}/> 
        <Route path ="/feeds-full" element ={<FeedListFull />}/>
        <Route path ="/concentrates" element ={<ConcentrateList />}/> 
        
        {/* <Route path ="/farm-items" element ={<FarmItems />}/> */}
      </Routes>
      <Footer />
    </>
  )
}
export default App