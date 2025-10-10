import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-auto bg-gradient-to-r from-[#632EE3]/10 via-[#9F62F2]/10 to-[#632EE3]/10 text-gray-800 border-t border-gray-300">
  <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
     {/* About Section */}
    <div>
      <h6 className="text-lg font-semibold text-[#632EE3] mb-3">HERO.IO</h6>
      <p className="text-sm leading-relaxed">
        Discover and explore the best modern apps. HERO.IO brings innovative tools to simplify your digital life.
      </p>
    </div>  

    {/* Explore Section */}
    <div>
      <h6 className="text-lg font-semibold text-[#632EE3] mb-3">Explore</h6>
      <ul className="space-y-2">
        <li><a className="link link-hover">All Apps</a></li>
        <li><a className="link link-hover">Top Rated</a></li>
        <li><a className="link link-hover">Categories</a></li>
        <li><a className="link link-hover">New Releases</a></li>
      </ul>
    </div>

     {/* Company Section */}
    <div>
      <h6 className="text-lg font-semibold text-[#632EE3] mb-3">Company</h6>
      <ul className="space-y-2">
        <li><a className="link link-hover">About Us</a></li>
        <li><a className="link link-hover">Contact</a></li>
        <li><a className="link link-hover">Contribute</a></li>
        <li><a className="link link-hover">Careers</a></li>
      </ul>
    </div>

    {/* Newsletter Section */}
<div>
  <h6 className="text-lg font-semibold text-[#632EE3] mb-3">Stay Updated</h6>
  <form className="space-y-3">
    <label className="text-sm block">Subscribe for app updates</label>

    {/* Input + Button */}
    <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
      <input
        type="email"
        placeholder="you@example.com"
        className="w-full sm:flex-1 py-2.5 px-4 border border-gray-300 
                   rounded-full focus:outline-none focus:ring-2 
                   focus:ring-purple-300 text-sm sm:text-base
                   transition-all duration-300"
      />

      <button
        className="w-full sm:w-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                   text-white font-medium rounded-full text-sm sm:text-base
                   px-5 sm:px-6 py-2.5 hover:scale-105 transition-all 
                   duration-300 shadow-md"
      >
        Subscribe
      </button>
    </div>
  </form>
</div>


  </div>

  {/* --- Copyright --- */}
  <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-300">
    © {new Date().getFullYear()} HERO.IO — All rights reserved.
  </div>
        </footer>

    );
};

export default Footer;