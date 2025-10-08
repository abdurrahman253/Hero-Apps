import React from "react";

const SkeletonLoader = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto p-5">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col gap-4 animate-pulse">
          <div className="bg-gray-200 rounded-xl aspect-square"></div>
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;

