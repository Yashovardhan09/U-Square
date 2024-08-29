import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/bg.png'; 

const Home = () => {
  return (
    <div className="h-auto overflow-x-hidden">
      {/* Hero Section */}
      <div className="h-screen relative flex flex-col justify-center items-center bg-black pt-20">
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ opacity: 0.9 }} // Adjust opacity for lighter image
        />

        {/* Overlay for the image */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

        <div className="relative max-w-4xl px-4 text-center z-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 transition-all duration-300">
            Learn Salesforce & Full Stack Web Development From Scratch
          </h1>
          <p className="text-lg sm:text-xl font-medium text-white mt-4 mb-8 transition-all duration-300">
            Gain in-demand tech skills like Data Cloud, Marketing Cloud, JavaScript, React, and Node.js, and create a robust portfolio to impress employers.
          </p>
          <Link to="/full-stack-course">
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-lg font-medium transition-all duration-300 backdrop-blur-md bg-opacity-30 hover:bg-opacity-50 border border-opacity-50 hover:text-blue-600">
              View Course
            </button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-black text-white py-12 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 px-4">
          <img
            src="https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-with-type-logo.svg"
            alt="Logo"
            className="w-24 h-24 object-contain"
          />
          <div className="text-center md:text-left max-w-3xl">
            <p className="text-lg font-medium">
              Our institute offers Salesforce Cloud Technologies and a full-stack development course using JavaScript, React JS, Node JS, and MongoDB. Classes are available online and offline, with placement assistance to help you secure your dream job. Enroll now and take your first step towards becoming a successful developer.
            </p>
          </div>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/mern-stack-5363121-4488910.png"
            alt="MERN Stack"
            className="w-24 h-24 object-cover"
          />
        </div>
      </div>

      {/* Announcement Section */}
      <div className="flex justify-center bg-black py-12">
        <div className="border bg-black shadow-2xl text-white py-8 px-6 rounded-lg w-full max-w-4xl">
          <p className="text-2xl font-bold text-white backdrop-brightness-200">
            Transform Your Career: New MERN Stack Batch Commences Sept 1st, 2024
          </p>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="bg-black text-white py-8 flex justify-center">
        <div className="max-w-3xl text-center px-4">
          <p className="text-3xl md:text-4xl font-extrabold text-white shadow-lg">
            Why Choose Us?
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black py-12 flex justify-center">
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Feature Cards */}
          {[
            { img: 'https://cdn-icons-png.flaticon.com/512/1041/1041889.png', title: 'Built for Novices', desc: 'Just starting? Let’s take the first step together.' },
            { img: 'https://cdn-icons-png.flaticon.com/512/1828/1828911.png', title: 'Hands-on Learning', desc: 'Practice your skills in real-world projects.' },
            { img: 'https://cdn-icons-png.flaticon.com/512/2218/2218680.png', title: 'Expert Instructors', desc: 'Learn from industry experts.' },
            { img: 'https://cdn-icons-png.flaticon.com/512/1900/1900735.png', title: 'Flexible Schedules', desc: 'Choose online or offline classes.' },
            { img: 'https://cdn-icons-png.flaticon.com/512/1014/1014093.png', title: 'Career Support', desc: 'Get personalized career coaching.' },
            { img: 'https://cdn-icons-png.flaticon.com/512/1533/1533075.png', title: 'Community Driven', desc: 'Join a supportive community.' },
          ].map((feature, index) => (
            <div key={index} className="bg-black border border-white/90 rounded-3xl shadow-xl p-4 h-72 flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <img 
                src={feature.img} 
                alt={feature.title} 
                className="w-16 h-16 mb-4 filter invert"
              />
              <h3 className="text-xl font-extrabold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Student Reviews Section */}
      <div className="bg-black text-white py-12">
        <div className="text-center max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Student Reviews
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { review: 'This course has been a game changer for me. The hands-on projects and expert instructors helped me land my first job as an Email Specialist.', name: 'Shakhya Yashovardhan, SFMC Engineer' },
              { review: 'I appreciated the flexibility of online classes and the career support provided. It made the transition into tech much smoother.', name: 'Pushpa Latha, SFDC Engineer' },
              { review: 'The course content was thorough and well-structured. I now feel confident in my full-stack development skills.', name: 'Yuvi, FullStack Developer' }
            ].map((student, index) => (
              <div 
                key={index} 
                className="bg-black bg-opacity-40 backdrop-blur-md border border-white/5 rounded-lg shadow-lg p-4 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-opacity-50"
              >
                <p className="text-lg text-gray-300 mb-4 text-center italic">
                  {`"${student.review}"`}
                </p>
                <p className="font-bold text-white text-center">
                  {student.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black backdrop-blur-lg py-12 flex flex-col items-center text-center">
        <div className="inline-block border-t border-white/20 border-opacity-30 pt-4 px-4">
          <h2 className="text-4xl font-bold mb-6 text-white shadow-transparent">
            U-SQUARE-ACADEMY
          </h2>
        </div>
        <p className="text-lg mb-2 text-white">
          Hitech City Road No-2, Hyderabad-500001
        </p>
        <p className="text-lg text-white">
          Phone: 7305472052
        </p>
        <p>
          <a href="mailto:contact@usquareacademy.com" className='text-gray-400 hover:text-green-500'>contact@usquareacademy.com</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
