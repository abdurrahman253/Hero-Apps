import React, { useState, useEffect } from "react";
import { getInstalledApps, removeInstalledApp } from "../Utils/localStorage";
import { toast } from "react-hot-toast";
import Spinner from "./Spinner";
import { GrInstall } from "react-icons/gr";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("high-low"); 

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const apps = getInstalledApps();
      setInstalledApps(apps);
      setLoading(false);
    }, 700);
  }, []);

  const handleUninstall = (id, title) => {
    removeInstalledApp(id);
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
    toast.success(`${title} uninstalled successfully!`);
  };

  // Sort apps based on downloads
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "high-low") return b.downloads - a.downloads;
    else return a.downloads - b.downloads;
  });

  return (
    <div className="min-h-screen py-12 px-6 md:px-12 space-y-8">
  {/* Top Header */}
<div className="flex flex-col items-center justify-center text-center py-6 px-6
                bg-gradient-to-r from-purple-100 via-purple-50 to-pink-100 rounded-2xl shadow-lg">
  <div className="flex items-center gap-3 text-purple-700 text-2xl lg:text-3xl font-extrabold 
                  drop-shadow-md">
    <span>Your Installed Apps</span>
    <GrInstall className="text-4xl text-pink-500 drop-shadow-md" />
  </div>
  <p className="text-purple-600 text-sm md:text-base mt-2 max-w-md">
    Explore All Trending Apps on the Market developed by us
  </p>
</div>



      {/* Filters Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-800 font-medium">
          {installedApps.length} Apps Found
        </div>

       <div className="flex items-center gap-3 bg-white rounded-full shadow-sm px-4 py-2">
  <label htmlFor="sort" className="text-gray-700 font-medium whitespace-nowrap">
    Sort by Downloads:
  </label>
  <select
    id="sort"
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    className="border border-gray-300 rounded-full px-4 py-2 text-gray-700 
               focus:outline-none focus:ring-2 focus:ring-purple-400 
               focus:border-transparent transition-all duration-200
               bg-white hover:shadow-sm"
  >
    <option value="high-low">High-Low</option>
    <option value="low-high">Low-High</option>
  </select>
</div>

      </div>

    
      <hr className="border-gray-300" />

      {/* Apps Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Spinner />
        </div>
      ) : sortedApps.length === 0 ? (
        <p className="text-center py-20 text-gray-500">
          No apps installed yet 😢
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-3xl shadow-md p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-32 h-32 object-contain rounded-2xl shadow"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {app.title}
              </h2>
              <p className="text-gray-500">{app.companyName}</p>
              <p className="text-gray-600 font-medium">
                Downloads: {app.downloads.toLocaleString()}
              </p>
              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
