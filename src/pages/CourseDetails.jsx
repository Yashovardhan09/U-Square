import React from "react";
import image from '../assets/free.jpg';

const CourseDetails = () => {
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

        <div className="w-full max-w-4xl shadow-slate-100 mx-auto space-y-12">
          {[
            {
              title: "Technical Induction",
              url: "https://www.youtube.com/embed/DrRx7IWRakc?si=_ZtcGW2CiKSz-wqe",
            },
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
          {[
            {
              title: "Precourse-Introduction",
              url: "https://www.youtube.com/embed/j3qMSL-HWF8?si=k49NI2sfLzQqpCvj",
            },
            {
              title: "Precourse-Outline",
              url: "https://www.youtube.com/embed/-i-xexpog3k?si=4AejkO_mLwFYzzEa",
            },
            {
              title: "Precourse-Installing of Node js and VS code",
              url: "https://www.youtube.com/embed/oYIHMMaVio0?si=qTepDHPjohAoOOWN",
            },
            {
              title: "Precourse- Setting up dev environment",
              url: "https://www.youtube.com/embed/rFIPPsDweiE?si=z5E6rNjy3cwHYOb-",
            },
          ].map((video, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row bg-glass bg-opacity-10 backdrop-blur-lg border border-gray-700 p-6 rounded-3xl shadow-xl mx-auto transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex-1 text-left pr-4 mb-4 sm:mb-0">
                <button
                  onClick={() => handleVideoClick(video.url)}
                  className="text-2xl mt-16 font-bold bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-200 to-gray-700 border-none cursor-pointer"
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
    </div>
  );
};

export default CourseDetails;
