import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import usquarelogo from '../assets/navbarbg.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  // Reset dropdown state when location changes
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <nav className="bg-gray-950 text-white w-full fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              <img
                src={usquarelogo}
                className="h-12 rounded-3xl mt-1 w-12"
                alt="Logo"
              />
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg 
                className="w-6 h-6"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex text-lg space-x-4 items-center">
            <Link to="/free-courses" className="hover:text-green-900">
              Free Courses
            </Link>
            <Link to="/blog" className="hover:text-green-900">
              Blog
            </Link>
            <Link to="/about" className="hover:text-green-900">
              About
            </Link>
            <Link to="/full-stack-course" className="hover:text-green-900">
              View Courses
            </Link>
            <Link to="/placements" className="hover:text-green-900">
              Placements
            </Link>
            <Link to="/contacts" className="hover:text-green-900">
              Contact
            </Link>

            {/* Course-Details Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="hover:text-green-900 focus:outline-none"
              >
                Course-Details
              </button>
              {isDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 py-2 w-48 bg-gray-800 rounded-md shadow-xl z-50"
                >
                  <Link to="/salesforce" className="block px-4 py-2 text-sm text-white hover:bg-green-900" onClick={closeMobileMenu}>
                    Salesforce
                  </Link>
                  <Link to="/mern-stack" className="block px-4 py-2 text-sm text-white hover:bg-green-900" onClick={closeMobileMenu}>
                    MERN Stack
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}>
          <div className="flex flex-col space-y-2">
            <Link to="/free-courses" className="block text-center  hover:text-green-900" onClick={closeMobileMenu}>
              Free Courses
            </Link>
            <Link to="/blog" className="block text-center hover:text-green-900" onClick={closeMobileMenu}>
              Blog
            </Link>
            <Link to="/about" className="block text-center hover:text-green-900" onClick={closeMobileMenu}>
              About
            </Link>
            <Link to="/full-stack-course" className="block text-center hover:text-green-900" onClick={closeMobileMenu}>
              View Courses
            </Link>
            <Link to="/placements" className="block text-center hover:text-green-900" onClick={closeMobileMenu}>
              Placements
            </Link>
            <Link to="/contacts" className="block text-center hover:text-green-900" onClick={closeMobileMenu}>
              Contact
            </Link>
            
            {/* Course-Details Dropdown in Mobile */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-center bg-gray-800 text-white py-2 hover:bg-green-900"
              >
                Course-Details
              </button>
              {isDropdownOpen && (
                <div className="mt-2 py-2 w-full bg-gray-800 rounded-md shadow-xl z-50">
                  <Link to="/salesforce" className="block px-4 py-2 text-sm text-white hover:bg-green-900" onClick={closeMobileMenu}>
                    Salesforce
                  </Link>
                  <Link to="/mern-stack" className="block px-4 py-2 text-sm text-white hover:bg-green-900" onClick={closeMobileMenu}>
                    MERN Stack
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
