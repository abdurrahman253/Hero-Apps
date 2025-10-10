import React, { useState, useEffect } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import Spinner from "./Spinner";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false); // 🔹 new state for search spinner
  const [searchedApps, setSearchedApps] = useState([]);

  // 🔹 Handle search with delay to simulate loading
  useEffect(() => {
    setSearchLoading(true); // show spinner
    const delay = setTimeout(() => {
      const term = search.trim().toLowerCase();
      const filtered = term
        ? apps.filter((app) => app.title.toLowerCase().includes(term))
        : apps;
      setSearchedApps(filtered);
      setSearchLoading(false); // hide spinner after filtering
    }, 700); // small delay to feel like searching

    return () => clearTimeout(delay);
  }, [search, apps]);

  return (
    <div className="p-5 max-w-7xl mx-auto">
      {/* Title + Subtitle */}
      <div className="text-center max-w-2xl mx-auto mt-10 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent leading-tight tracking-wide">
          Our All Applications
        </h1>
        <p className="text-gray-600 text-base md:text-lg mt-4 font-medium leading-relaxed">
          Discover innovative apps built with precision, performance, and purpose.
          Engineered for millions — tailored for your everyday experience.
        </p>
      </div>

      {/* Header + Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 mb-6 gap-4">
        <h1 className="text-2xl font-semibold">
          ({searchedApps.length}) Apps Found
        </h1>

        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Apps"
          className="border rounded-full px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
        />
      </div>

      {/* Apps Grid */}
      {loading || searchLoading ? (
        <Spinner />
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : searchedApps.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-16">
          <img
            src="/src/assets/App-Error.png"
            alt="No Apps Found"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain mb-6 animate-fadeIn"
          />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
            No Apps Found
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-md">
            We couldn't find any apps matching your search. Try adjusting your
            keywords or explore all our available apps.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
