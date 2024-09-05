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
        <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-90 z-10"></div>

        <div className="relative max-w-4xl px-4 text-center z-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 transition-all duration-300">
            Learn Salesforce & Full Stack Web Development From Scratch
          </h1>
          <p className="text-lg sm:text-xl font-medium text-white mt-4 mb-8 transition-all duration-300">
            Gain in-demand tech skills like Data Cloud, Marketing Cloud, JavaScript, React, and Node.js, and create a robust portfolio to impress employers.
          </p>
          <Link to="/full-stack-course">
          <button className="bg-[#f0f4f6] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-opacity-90 hover:shadow-xl shadow-md transform hover:-translate-y-1">
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
        <div className="border bg-black shadow-2xl text-white py-8 px-6 rounded-lg w-full max-w-4xl dark:bg-gray-800 dark:border-gray-700">
          <p className="text-2xl font-bold text-white backdrop-brightness-200">
            Transform Your Career: New MERN Stack Batch Commences Sept 1st, 2024
          </p>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="bg-black text-white py-8 flex justify-center items-center dark:bg-gray-800">
        <div className="max-w-3xl text-center px-4">
          <p className="text-3xl md:text-4xl font-extrabold text-white shadow-lg">
            Why Choose Us?
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black py-12 flex justify-center align-middle dark:bg-gray-800">
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Feature Cards */}
          {[
            { img: 'https://cdn-icons-png.flaticon.com/512/1041/1041889.png', title: 'Built for Novices', desc: 'Just starting? Let’s take the first step together.' },
            { img: 'https://cdn-icons-png.flaticon.com/512/1828/1828911.png', title: 'Hands-on Learning', desc: 'Practice your skills in real-world projects.' },
            { img: 'https://cdn-icons-png.flaticon.com/512/2218/2218680.png', title: 'Expert Instructors', desc: 'Learn from industry experts.' },
            { img: 'https://cdn-icons-png.flaticon.com/512/1900/1900735.png', title: 'Flexible Schedules', desc: 'Choose online or offline classes.' },
            { img: 'https://cdn-icons-png.flaticon.com/512/1014/1014093.png', title: 'Career Support', desc: 'Get personalized career coaching.' },
            { img: 'https://cdn-icons-png.flaticon.com/512/1533/1533075.png', title: 'Community Driven', desc: 'Join a supportive community.' },
            { img: 'https://www.contactcenterpipeline.com/Portals/0/EasyDNNnews/2361/CCP-Web-Intelligent-swarm.png', title: 'Swarming Model', desc: 'We provide Swarming model to enhance your learning.' },
            { img: 'https://www.shutterstock.com/image-photo/multiethnic-group-people-activity-concept-260nw-229793107.jpg', title: 'Weekend Activities', desc: 'Weekend activities to keep you upto date and improve communication skills.' },
            { img: 'data:image/png;base64,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', title: 'Slack', desc: 'We provide slack to provide you one stop place to learn.' },
          ].map((feature, index) => (
            <div key={index} className="bg-black border border-white/90 rounded-3xl shadow-xl p-4 h-72 flex flex-col items-center transform hover:scale-105 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
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
      <div className="bg-black text-white py-12 dark:bg-gray-800">
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
                className="bg-black bg-opacity-40 backdrop-blur-md border border-white/5 rounded-lg shadow-lg p-4 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-opacity-50 dark:bg-gray-800 dark:border-gray-700"
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
      <div className="bg-black backdrop-blur-lg py-12 flex flex-col items-center text-center dark:bg-gray-800">
        <div className="inline-block border-t border-white/20 border-opacity-30 pt-4 px-4">
          <h2 className="text-4xl font-bold mb-6 text-white shadow-transparent">
          U Square Academy
          </h2>
        </div>
        <p className="text-lg mb-2 text-white">
          SMD Grandeur,Flat #201, HUDA <br/>
          Neknampur, Hyderabad, 5000089
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
