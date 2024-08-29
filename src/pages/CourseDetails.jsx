import React, { useState } from "react";
import image from '../assets/free.jpg'

const CourseDetails = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleGetCourseClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const handleVideoClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-black min-h-screen py-16">
      <div className="flex flex-col items-center mt-24">
        <img
          src={image}
          alt="Salesforce and JavaScript"
          className="w-full max-w-md rounded-lg mb-8"
          style={{
            height: "200px",
            objectFit: "cover",
            border: "1px solid #333",
          }}
        />
        {!isFormVisible ? (
          <button
            onClick={handleGetCourseClick}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get Course for Free
          </button>
        ) : (
          <div className="bg-black p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-800 relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold text-yellow-400 mb-6">
              Sign Up for Free Course
            </h3>

            <form>
              <div className="mb-6">
                <label
                  className="block text-green-300 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-green-300 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-green-300 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 text-black rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <input
                  id="terms"
                  type="checkbox"
                  className="mr-2 leading-tight"
                />
                <label className="text-green-300 text-sm" htmlFor="terms">
                  I agree to the{" "}
                  <a href="#" className="text-yellow-400 underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-yellow-400 underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-6 text-sm text-green-300">
              Unable to Login? We are here:{" "}
              <a
                href="mailto:contact@usquareacademy.com"
                className="text-yellow-400 underline"
              >
                contact@usquareacademy.com
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="bg-black mt-14 py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-extrabold mb-4 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-200 to-gray-700">
              Free Course
            </span>
          </h2>
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 text-3xl font-bold via-gray-200 to-gray-700">
            Syllabus - Salesforce
          </h3>
        </div>

        <div className="w-full max-w-4xl shadow-slate-100 mx-auto space-y-12 ">
          {[
            {
              title: "Salesforce Basics",
              url: "https://www.youtube.com/embed/j3qMSL-HWF8?si=k49NI2sfLzQqpCvj",
            },
            {
              title: "SFMC Overview",
              url: "https://www.youtube.com/embed/VIDEO_ID_2",
            },
            {
              title: "SFDC Overview",
              url: "https://www.youtube.com/embed/VIDEO_ID_3",
            },
          ].map((video, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row bg-glass bg-opacity-10 backdrop-blur-lg border border-gray-700 p-6 rounded-3xl shadow-xl mx-auto transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex-1 text-left mb-4 sm:mb-0 pr-4">
                <button
                  onClick={() => handleVideoClick(video.url)}
                  className="text-2xl mt-16 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-200 to-gray-700 bg-transparent border-none cursor-pointer"
                >
                  {video.title}
                </button>
              </div>
              <div className="flex-1">
                <div className="relative pb-[56.25%] rounded-3xl overflow-hidden border border-gray-700">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-3xl"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black py-16 px-4">
        <div className="text-center mb-16">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-white text-4xl font-extrabold via-gray-500 to-gray-700">
            Syllabus - JavaScript
          </h3>
        </div>

        <div className="w-full max-w-4xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row bg-glass bg-opacity-10 backdrop-blur-lg border border-gray-700 p-6 rounded-3xl shadow-xl mx-auto transform hover:scale-105 transition-all duration-300">
            <div className="flex-1 text-left pr-4 mb-4 sm:mb-0">
              <button
                onClick={() =>
                  handleVideoClick(
                    "https://www.youtube.com/embed/j3qMSL-HWF8?si=k49NI2sfLzQqpCvj"
                  )
                }
                className="text-2xl font-bold mt-16  bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-200 to-gray-700 border-none cursor-pointer"
              >
                Precourse-Introduction
              </button>
            </div>
            <div className="flex-1">
              <div className="relative pb-[56.25%] rounded-3xl overflow-hidden border border-gray-700">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-3xl"
                  src="https://www.youtube.com/embed/j3qMSL-HWF8?si=k49NI2sfLzQqpCvj"
                  title="JavaScript Precourse"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row bg-glass bg-opacity-10 backdrop-blur-lg border border-gray-700 p-6 rounded-3xl shadow-xl mx-auto transform hover:scale-105 transition-all duration-300">
            <div className="flex-1 text-left pr-4 mb-4 sm:mb-0">
              <button
                onClick={() =>
                  handleVideoClick(
                    "https://www.youtube.com/embed/j3qMSL-HWF8?si=k49NI2sfLzQqpCvj"
                  )
                }
                className="text-2xl mt-16 font-bold  bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-200 to-gray-700 border-none cursor-pointer"
              >
                Precourse-Outline
              </button>
            </div>
            <div className="flex-1">
              <div className="relative pb-[56.25%] rounded-3xl overflow-hidden border border-gray-700">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-3xl"
                  src="https://www.youtube.com/embed/-i-xexpog3k?si=4AejkO_mLwFYzzEa"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row bg-glass bg-opacity-10 backdrop-blur-lg border border-gray-700 p-6 rounded-3xl shadow-xl mx-auto transform hover:scale-105 transition-all duration-300">
            <div className="flex-1 text-left pr-4 mb-4 sm:mb-0">
              <button
                onClick={() =>
                  handleVideoClick(
                    "https://www.youtube.com/embed/j3qMSL-HWF8?si=k49NI2sfLzQqpCvj"
                  )
                }
                className="text-2xl mt-16 font-bold  bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-200 to-gray-700 border-none cursor-pointer"
              >
                 Precourse-Installing of Node js and VS code
              </button>
            </div>
            <div className="flex-1">
              <div className="relative pb-[56.25%] rounded-3xl overflow-hidden border border-gray-700">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-3xl"
                  src="https://www.youtube.com/embed/oYIHMMaVio0?si=qTepDHPjohAoOOWN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row bg-glass bg-opacity-10 backdrop-blur-lg border border-gray-700 p-6 rounded-3xl shadow-xl mx-auto transform hover:scale-105 transition-all duration-300">
            <div className="flex-1 text-left pr-4 mb-4 sm:mb-0">
              <button
                onClick={() =>
                  handleVideoClick(
                    "https://www.youtube.com/embed/j3qMSL-HWF8?si=k49NI2sfLzQqpCvj"
                  )
                }
                className="text-2xl mt-16 font-bold  bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-200 to-gray-700 border-none cursor-pointer"
              >
                Precourse- Setting up dev environment
              </button>
            </div>
            <div className="flex-1">
              <div className="relative pb-[56.25%] rounded-3xl overflow-hidden border border-gray-700">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-3xl"
                  src="https://www.youtube.com/embed/rFIPPsDweiE?si=z5E6rNjy3cwHYOb-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
