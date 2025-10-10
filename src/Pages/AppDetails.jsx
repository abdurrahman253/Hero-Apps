import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useApps from "../Hooks/useApps";
import { FiDownload } from "react-icons/fi";
import { MdOutlineStar, MdOutlineReviews } from "react-icons/md";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { getInstalledApps, saveInstalledApp } from "../Utils/localStorage";
import toast from "react-hot-toast";
import Spinner from "./Spinner";


const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  const app = apps.find((a) => a.id === Number(id));

  const [installed, setInstalled] = useState(
    app ? getInstalledApps().some(a => a.id === app.id) : false
  );

  if (loading) return <Spinner />;;
  if (!app)
    return (
      <p className="text-center py-20 text-red-500 text-lg">
        App not found 😢
      </p>
    );

  const { description, image, downloads, reviews, title, ratingAvg, companyName, size } = app;

  const handleInstall = () => {
    if (!installed) {
      saveInstalledApp(app);
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    }
  };

  
  const chartData = [5,4,3,2,1].map(star => {
    const rating = app.ratings.find(r => r.name.startsWith(star.toString())) || { count: 0 };
    return { star, count: rating.count };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F8FF] to-[#F1F3FF] py-16 px-6 md:px-12 space-y-16">
      {/* Image + Info */}
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#9F62F2] to-[#632EE3] blur-xl opacity-40 group-hover:opacity-60 transition duration-300"></div>
            <img
              src={image}
              alt={title}
              className="relative z-10 w-60 h-60 md:w-72 md:h-72 object-contain rounded-3xl shadow-lg bg-white p-6"
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3 space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">{title}</h1>
            <p className="text-gray-600 mt-2 text-lg">
              Developed by{" "}
              <span className="font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>

          <div className="h-[2px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-all">
              <FiDownload className="text-[#00827A] text-3xl mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Downloads</p>
              <h3 className="font-bold text-2xl text-gray-800">{downloads.toLocaleString()}</h3>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-all">
              <MdOutlineStar className="text-yellow-400 text-3xl mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Average Rating</p>
              <h3 className="font-bold text-2xl text-gray-800">{ratingAvg.toFixed(1)}</h3>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-all">
              <MdOutlineReviews className="text-[#9F62F2] text-3xl mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Total Reviews</p>
              <h3 className="font-bold text-2xl text-gray-800">{reviews.toLocaleString()}</h3>
            </div>
          </div>

          {/* Install Button */}
          <div className="pt-4">
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`px-8 py-3 rounded-full text-lg font-semibold text-white 
                ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-[#54CF68] to-[#00827A] hover:scale-105"} 
                shadow-md hover:shadow-lg transition-all duration-300`}
            >
              {installed ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white shadow-md rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">App Ratings Distribution</h2>
        <div className="flex items-center gap-4">
          {/* Ratings Labels */}
          <div className="flex flex-col justify-between h-56">
            {chartData.map((d) => (
              <span key={d.star} className="text-gray-700 font-semibold text-lg">{d.star}★</span>
            ))}
          </div>

          {/* Bar Chart */}
          <div className="flex-1 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={chartData}
                margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
              >
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="star" hide />
                <Tooltip cursor={{ fill: "#f3f4f6" }} formatter={(value) => value.toLocaleString()} />
                <Bar dataKey="count" fill="#9F62F2" radius={[10,10,10,10]}>
                  <LabelList 
                    dataKey="count" 
                    position="right" 
                    formatter={(value) => value.toLocaleString()} 
                    fill="#1F2937"
                    fontWeight={600}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white shadow-md rounded-3xl p-8 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Description</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
