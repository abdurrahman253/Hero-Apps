import React from 'react';

const States = () => {
 return (
       
      <div className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center pt-0 pb-12 px-4 sm:px-8 lg:px-16 rounded-2xl shadow-lg">
        {/* Heading */}
        <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold pt-10 mb-10">
         Trusted by Millions, Built for You
        </h3>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
 
            {/* Stat 1 */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                <span className="uppercase text-sm tracking-wider text-white/80">Total Downloads</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-1">29.6M</h2>
                <span className="text-white/70 text-sm">21% more than last month</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                <span className="uppercase text-sm tracking-wider text-white/80">Total Reviews</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-1">906K</h2>
                <span className="text-white/70 text-sm">46% more than last month</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                <span className="uppercase text-sm tracking-wider text-white/80">Active Apps</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-1">132+</h2>
                <span className="text-white/70 text-sm">31 more will Launch</span>
            </div>

        </div>
    </div>
 );
};

export default States;