import React from "react";

const PromotionalHeader: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      {/* Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-5">
        {/* Left Content */}
        <div className="text-left lg:w-1/2">
          <h4 className="text-indigo-500 text-sm font-bold mb-2">
            Best Furniture For Your Castle...
          </h4>
          <h1 className="text-gray-900 text-4xl font-bold leading-snug mb-4">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          
          <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex items-center justify-center relative">
          {/* Background Circle */}
          <div className="absolute bg-indigo-100 w-80 h-80 rounded-full -z-10"></div>

          {/* Images */}
          {/* Add sofa image */}
          <img
            src="\1.png" 
            
            className="w-60 h-60 object-cover rounded-lg"
          />

          {/* Add lamp image */}
          <img
            src="\2.png" // Replace with the actual lamp image path
        
            className="absolute top-0 left-5 w-20 h-20 object-cover"></img>
          {/* Badge */}
          <div className="absolute top-10 right-10 bg-blue-500 text-white font-bold py-1 px-3 rounded-full text-sm">
            50% off
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalHeader;
