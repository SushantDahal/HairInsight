import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Review from './components/Review';
import Features from './components/Features';


function App() {  return (
    <>
    <div className='bg-green-200'>
         <Navbar/>
         <Hero />
         <Review/>
         <Features/>
    </div>
    </>
  )
}

export default App;
