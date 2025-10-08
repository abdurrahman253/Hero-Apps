import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import SkeletonLoader from "../Components/SkeletonLoader";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  return (
    <div className="p-5 max-w-7xl mx-auto">
      {/* Header + Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-semibold">
          All Apps{" "}
          <span className="text-sm text-gray-500">
            ({searchedApps.length}) Apps Found
          </span>
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
      {loading ? (
        <SkeletonLoader count={20} />
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : searchedApps.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">No apps found.</p>
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
