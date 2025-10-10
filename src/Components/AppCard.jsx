import React from "react";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";

const AppCard = ({ app }) => {
  const { id, title, image, ratingAvg, downloads } = app;

  return (
    <Link
      to={`/app/${id}`}
      className="bg-white border border-gray-100 rounded-3xl shadow-lg 
                 hover:shadow-2xl hover:scale-[1.05] 
                 transition-all duration-300 p-4 sm:p-5 
                 flex flex-col gap-3 sm:gap-4 cursor-pointer 
                 h-full w-full" 
    >
     
      <figure className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">
        <img
        
          className="w-full h-full object-cover sm:object-contain" 
          src={image}
          alt={title || "App image"}
          loading="lazy"
        />
      </figure>

      
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
        {title}
      </h3>

    
      <div className="flex justify-between items-center text-gray-500 text-sm mt-auto border-t border-gray-100 pt-3 sm:pt-4">
        
       
        <div className="flex items-center gap-1 font-medium">
          <FiDownload className="text-[#632EE3] h-4 w-4" /> 
          <span className="text-gray-700">{downloads.toLocaleString()}</span>
        </div>

        
        <div className="flex items-center gap-1 font-medium">
          <IoMdStar className="text-yellow-400 h-4 w-4" /> 
          <span className="text-gray-700">{ratingAvg.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;

