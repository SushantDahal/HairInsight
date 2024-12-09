import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Review from './components/Review';
import Features from './components/Features';
import Experts from './components/Experts';

function App() {  return (
    <>
    {/* <div className='bg-green-200'> */}
      <div>
         <Navbar/>/
         <Hero />
         <Review/>
         <Features/>
         <Experts/>
    </div>
    </>
  )
}

export default App;
