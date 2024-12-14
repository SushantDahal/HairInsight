import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Doctors from "./components/Doctors";
import Features from "./components/Features";
import Experts from "./components/Experts";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <div className='bg-green-200'> */}
      <div className="min-w-[300px]">
        <Navbar />
        <Hero />
        <Review />
        <Doctors />
        <Features />
        <Experts />
        <Work />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
