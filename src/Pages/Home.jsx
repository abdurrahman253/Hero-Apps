import React from "react";
import Banner from "./Banner";
import States from "./States";
import useApps from "../Hooks/useApps";
import { Link } from "react-router-dom";
import SkeletonLoader from "../Components/SkeletonLoader";
import AppCard from "../Components/AppCard";

const Home = () => {
  const { apps, loading, error } = useApps();
  const trendingApps = Array.isArray(apps) ? apps.slice(0, 8) : [];

  return (
    <div>
      <Banner />
      <States />

      <section className="flex flex-col justify-center py-10 items-center">
        <h1 className="text-3xl font-semibold mb-1">Trending Apps</h1>
        <p className="text-gray-500 mb-6 text-center">
          Explore all trending apps developed by our team
        </p>

        {loading ? (
          <SkeletonLoader />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : trendingApps.length === 0 ? (
          <p className="text-gray-500 mt-4">No trending apps available.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {trendingApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}

        {/* See All Button */}
        <Link
          to="/apps"
          className="inline-block px-14 py-4 mt-8 rounded-full text-lg md:text-xl font-bold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-lg
          hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          See All
        </Link>
      </section>
    </div>
  );
};

export default Home;
