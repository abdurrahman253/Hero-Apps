import React, { useState, useEffect } from "react";
import { getInstalledApps, removeInstalledApp } from "../Utils/localStorage";
import { toast } from "react-hot-toast";
import Spinner from "./Spinner";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // simulate loading for UX smoothness (optional)
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

  return (
    <div className="min-h-screen py-12 px-6 md:px-12 space-y-6">
      {/* ✅ Title stays always visible */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        My Installed Apps
      </h1>

      {/* 🔹 Conditional rendering only for app cards */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Spinner />
        </div>
      ) : installedApps.length === 0 ? (
        <p className="text-center py-20 text-gray-500">
          No apps installed yet 😢
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {installedApps.map((app) => (
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
