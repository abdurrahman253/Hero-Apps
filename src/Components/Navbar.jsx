import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { FaAppStore } from "react-icons/fa6";
import { MdInstallDesktop } from "react-icons/md";
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar shadow-sm md:px-10 sticky left-0 top-0 z-50 backdrop-blur-md bg-white/80">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-2 rounded-xl hover:bg-gradient-to-r hover:from-[#632EE3]/10 hover:to-[#9F62F2]/10 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 space-y-3.5 shadow"
          >
            <NavLink
              to="/"
              end
              className="relative flex group items-center gap-2 text-gray-600 font-medium transition-all duration-300"
            >
              {({ isActive }) => (
                <>
                  <AiOutlineHome size={20} />
                  <span className="text-lg">Home</span>
                  <span
                    className={`absolute left-0 -bottom-2 h-[3px] bg-gradient-to-r from-[#9F62F2] to-[#632EE3] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/apps"
              end
              className="relative flex group items-center gap-2 text-gray-600 font-medium transition-all duration-300"
            >
              {({ isActive }) => (
                <>
                  <FaAppStore size={20} />
                  <span className="text-lg">Apps</span>
                  <span
                    className={`absolute left-0 -bottom-2 h-[3px] bg-gradient-to-r from-[#9F62F2] to-[#632EE3] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/installation"
              end
              className="relative flex group items-center gap-2 text-gray-600 font-medium transition-all duration-300"
            >
              {({ isActive }) => (
                <>
                  <MdInstallDesktop size={20} />
                  <span className="text-lg">Installation</span>
                  <span
                    className={`absolute left-0 -bottom-2 h-[3px] bg-gradient-to-r from-[#9F62F2] to-[#632EE3] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </>
              )}
            </NavLink>
          </ul>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="flex ml-4 md:ml-4 lg:ml-0 items-center gap-2 text-xl font-semibold text-gray-800 hover:text-[#632EE3] transition-colors duration-300"
        >
          <img
            className="w-10 h-10 object-contain"
            src="/logo.png"
            alt="Hero.io Logo"
          />
          <span>HERO.IO</span>
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-center gap-8 py-4">
          <NavLink
            to="/"
            end
            className="relative flex group items-center gap-2 text-gray-600 font-medium transition-all duration-300"
          >
            {({ isActive }) => (
              <>
                <AiOutlineHome size={20} />
                <span className="text-lg">Home</span>
                <span
                  className={`absolute left-0 -bottom-2 h-[3px] bg-gradient-to-r from-[#9F62F2] to-[#632EE3] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/apps"
            end
            className="relative flex group items-center gap-2 text-gray-600 font-medium transition-all duration-300"
          >
            {({ isActive }) => (
              <>
                <FaAppStore size={20} />
                <span className="text-lg">Apps</span>
                <span
                  className={`absolute left-0 -bottom-2 h-[3px] bg-gradient-to-r from-[#9F62F2] to-[#632EE3] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/installation"
            end
            className="relative flex group items-center gap-2 text-gray-600 font-medium transition-all duration-300"
          >
            {({ isActive }) => (
              <>
                <MdInstallDesktop size={20} />
                <span className="text-lg">Installation</span>
                <span
                  className={`absolute left-0 -bottom-2 h-[3px] bg-gradient-to-r from-[#9F62F2] to-[#632EE3] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </>
            )}
          </NavLink>
        </ul>
      </div>

      {/* GitHub Button */}
      <div className="navbar-end">
        <a
          href="https://github.com/abdurrahman253"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full text-base md:text-lg font-semibold text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <img
            src="/github.png.png"
            alt="GitHub"
            className="w-5 h-5 md:w-7 md:h-7 object-contain"
          />
          <span>Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
