import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black  border-t border-white/20 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-xl font-semibold mb-2">
            100K+ creators trust to teach online
          </p>
          <div className="flex justify-center space-x-8 mb-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        <p className="text-lg text-center mb-4">
          Best MERN Full Stack Development Course | Hyderabad | Offline | Online | 100% Placements | Training Institute | Salesforce |
          Front End Course | React JS Training | Online Course India 2024
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/privacy-policy" className="hover:text-blue-300 underline">
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" className="hover:text-blue-300 underline">
            Terms of Use
          </Link>
          <Link to="/contact-us" className="hover:text-blue-300 underline">
            Contact Us
          </Link>
          <Link to="/refund-policy" className="hover:text-blue-300 underline">
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
