import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Features from "./components/Features";
import Experts from "./components/Experts";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      {/* <div className='bg-green-200'> */}
      <div className="min-w-[300px]">
        <Navbar />
        <Hero />
        <Review />
        <Features />
        <Experts />
        <Work />
        <Testimonial />
      </div>
    </>
  );
}

export default App;
