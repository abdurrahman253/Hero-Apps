import React from 'react';
import { NavLink } from 'react-router';

const Banner = () => {
    return (
      <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-16 pt-12 md:pt-16 lg:pt-24 space-y-6">
    {/* Heading */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
    We Build <br />
    <span className="bg-gradient-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
      Productive
    </span>{" "}
    Apps
  </h1>

   {/* Description */}
 <p className="text-gray-600 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl text-base sm:text-lg md:text-xl">
  HERO.IO builds cutting-edge apps that simplify your daily life, boost productivity, and inspire creativity.  
  We transform ideas into seamless digital experiences that make a real impact for users worldwide.
</p>


 {/* Buttons  */}
  <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center w-full max-w-md sm:max-w-lg md:max-w-xl">
    {/* Google Play */}
    <a
      href="https://play.google.com/store/apps?hl=en"
      className="flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-lg shadow-md transition-all duration-300 w-full sm:w-auto"
    >
      <img src="/playStore.png" alt="Google Play" className="w-6 h-6 sm:w-8 sm:h-8" />
      <span className="font-semibold text-gray-800 text-sm sm:text-base">Google Play</span>
    </a>

    {/* App Store */}
    <a
      href="https://www.apple.com/app-store/"
      className="flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-lg shadow-md transition-all duration-300 w-full sm:w-auto"
    >
      <img src="/appStore.png" alt="App Store" className="w-6 h-6 sm:w-8 sm:h-8" />
      <span className="font-semibold text-gray-800 text-sm sm:text-base">App Store</span>
    </a>
  </div>

   {/* Hero image */}
   <div className=' max-w-[320px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] xl:max-w-[900px] mt-6 mx-auto'>
    <img
     src="/hero.png"
     alt="Hero"
     className='w-full max-w-full h-auto object-contain'
     />
   </div>
      </div>

    );
};

export default Banner;