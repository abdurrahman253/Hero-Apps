import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = ({ error }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex flex-col flex-grow justify-center items-center text-center px-6 py-10 bg-gray-50">
        {/* Error  */}
        <img
          src="/src/assets/error-404.png"
          alt="Error"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain mb-8 animate-fadeIn"
        />

        {/* Error Texts */}
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-3">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-2">
          We couldn't find the page you're looking for.
        </p>
        <p className="text-gray-500 text-sm md:text-base">
          {error?.statusText || error?.message || "Please try again later."}
        </p>

        {/* Back Home Button */}
        <a
          href="/"
          className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Go Back Home
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default ErrorPage;
