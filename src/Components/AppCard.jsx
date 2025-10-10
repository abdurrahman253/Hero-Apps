import React from "react";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";

const AppCard = ({ app }) => {
  const { id, title, image, ratingAvg, downloads } = app;

  return (
    <Link
      to={`/app/${id}`}
      className="bg-white border rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 p-4 flex flex-col gap-3 cursor-pointer"
    >
      {/* Image Section */}
      <figure className="aspect-square w-full overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt={title || "App image"}
          loading="lazy"
        />
      </figure>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>

      {/* Info Row */}
      <div className="flex justify-between items-center text-gray-600 text-sm mt-auto">
        <div className="flex items-center gap-1">
          <FiDownload className="text-[#9F62F2]" />
          <span>{downloads.toLocaleString()}</span>
        </div>

        <div className="flex items-center gap-1">
          <IoMdStar className="text-yellow-500" />
          <span>{ratingAvg.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;

