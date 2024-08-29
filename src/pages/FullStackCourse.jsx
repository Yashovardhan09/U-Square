import React from "react";
import home from '../assets/Home.png'
const FullStackCourses = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-black px-5 py-16">
  {/* Left Side: Content */}
  <div className="lg:w-1/2 p-8">
    <h1 className="text-4xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-500 to-gray-500 mt-7">
      JOB-ORIENTED TRAINING PROGRAM
    </h1>
    <h2 className="text-3xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-500 to-gray-500">
      Full-Stack Web Development using MERN Stack & Salesforce Cloud Technologies
    </h2>
    <p className="text-lg text-gray-300 mt-5 transition-transform transform hover:scale-105">
      The MERN Stack course is designed to help you become an expert in using MongoDB, Express, React, and Node.js. The course covers front and back-end development using JavaScript, HTML, CSS, and Node.js. You will learn how to build user interfaces for the web and how to connect them to back-end APIs using the MERN stack. By the end of the course, you will have a solid understanding of these technologies and the ability to use them to create web applications.<br/>Enhance your skills with our comprehensive training in Salesforce Marketing Cloud (SFMC) and Salesforce (SFDC). Learn to master advanced marketing automation and customer engagement strategies with SFMC, while gaining a deep understanding of CRM tools and sales process management with SFDC. Equip yourself with the expertise to drive results and boost business growth
    </p>
  </div>

  {/* Right Side: Glass Effect Image */}
  <div className="lg:w-1/2 p-8 flex flex-col justify-center items-center">
    <div className="relative p-4 rounded-3xl shadow-xl transition-transform transform hover:scale-105 bg-black bg-opacity-50 backdrop-blur-lg">
      <img
        src={home}
        alt="Course Image"
        className="w-full h-auto mb-4 rounded-3xl object-cover border-4 border-transparent"
      />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-gray-900 opacity-50"></div>
    </div>
  </div>
</div>

<div className="flex flex-col lg:flex-row bg-gradient-to-br bg-black px-5 py-16">
  {/* Left Side: YouTube Video */}
  <div className="lg:w-1/2 p-8 flex justify-center items-center">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/PkZNo7MFNFg?si=k6ngC8EIIRPozeyH"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="rounded-lg shadow-lg border border-gray-700"
    ></iframe>
  </div>

  {/* Right Side: Module Details */}
  <div className="lg:w-1/2 p-8">
    <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-950 to-gray-900">
      Module 1
    </h1>
    <h2 className="text-3xl lg:text-4xl font-semibold mb-2 text-white ">
      Marketing Cloud
    </h2>
    <div className="w-1/2 border-b-4 border-gradient-to-r from-green-400 to-purple-600 mb-6"></div>
    <p className="text-lg text-gray-400">
      This module is designed to teach you the fundamentals of programming in a way that is consistent with industry standards. You will complete coding assignments to help you develop your logical thinking and problem-solving skills, including exercises based on common interview questions. By working through these exercises, you will gain a solid foundation in programming and be well-prepared for a career in the field.
    </p>
  </div>
</div>

<div className="flex flex-col lg:flex-row bg-gradient-to-br bg-black px-5 py-16">
  {/* Left Side: Module Details */}
  <div className="lg:w-1/2 p-8">
    <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gradient bg-clip-text text-transparent text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-950 to-gray-900">
      Module 2
    </h1>
    <h2 className="text-3xl lg:text-4xl font-semibold mb-2 text-gray-300">
      Data Cloud
    </h2>
    <div className="w-1/2 border-b-4 border-gradient-to-r from-teal-400 to-blue-600 mb-6"></div>
    <p className="text-lg text-gray-400">
      This module focuses on helping you build dynamic user interfaces using modern JavaScript technologies like React, Redux, and Ajax. You will have the opportunity to work on real-time projects, giving you practical experience and a deep understanding of these technologies. By the end of this module, you will have the skills and knowledge needed to build interactive and engaging user interfaces using the latest JavaScript frameworks.
    </p>
  </div>

  {/* Right Side: YouTube Video */}
  <div className="lg:w-1/2 p-8 flex justify-center items-center">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/zJSY8tbf_ys?si=x9_FRqf08liiNXlj"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="rounded-lg shadow-lg border border-gray-600 backdrop-blur-md"
    ></iframe>
  </div>
</div>

<div className="flex flex-col lg:flex-row bg-black px-5 py-16">
  {/* Left Side: YouTube Video */}
  <div className="lg:w-1/2 p-8 flex justify-center items-center">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/videoseries?si=zaj1sYXsZy-aQpaZ&amp;list=PLWPirh4EWFpFIElSxplDlEhRDZHkBD-0n"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="rounded-lg shadow-lg border border-gray-700 backdrop-blur-md transition-transform transform hover:scale-105"
    ></iframe>
  </div>

  {/* Right Side: Module Details */}
  <div className="lg:w-1/2 p-8">
    <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gradient bg-clip-text text-transparenttext-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-950 to-gray-900">
      Module 3
    </h1>
    <h2 className="text-3xl lg:text-4xl font-semibold mb-2 text-gray-200">
      MERNStack
    </h2>
    <div className="w-1/2 border-b-4 border-gradient-to-r from-emerald-400 to-pink-600 mb-6"></div>
    <p className="text-lg text-gray-300">
      This module prepares you to attend Front-End interviews at companies confidently. You'll take up two written tests and two mock interviews, solve all the recent interview questions, and schedule an impactful resume with a GitHub profile.
    </p>
  </div>
</div>

<div className="flex flex-col lg:flex-row bg-black px-5 py-16">
  {/* Left Side: Module Details */}
  <div className="lg:w-1/2 p-8">
    <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gradient bg-clip-text text-transparent text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-950 to-gray-900">
      Module 4
    </h1>
    <h2 className="text-3xl lg:text-4xl font-semibold mb-2 text-gray-200">
      Placement Preparation
    </h2>
    <div className="w-1/2 border-b-4 border-gradient-to-r from-teal-400 to-amber-500 mb-6"></div>
    <p className="text-lg text-gray-300">
      This module will teach you how to set up REST APIs, work with databases, and implement security features such as user authentication and authorization. You will also learn how to connect the front and back end and build full-stack projects. This module will give you the skills and knowledge to create comprehensive, secure, and functional web applications.
    </p>
  </div>

  {/* Right Side: YouTube Video */}
  <div className="lg:w-1/2 p-8 flex justify-center items-center">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/videoseries?si=lnbymVCY0DSGm1Zy&amp;list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW"
      title="YouTube video player"
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="rounded-lg shadow-lg border border-gray-700 backdrop-blur-md transition-transform transform hover:scale-105"
    ></iframe>
  </div>
</div>

<div className="flex flex-col lg:flex-row bg-black px-5 py-16">
  {/* Left Side: YouTube Video */}
  <div className="lg:w-1/2 p-8 flex justify-center items-center">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Z4-dXwnw7W8?si=8ei1pXuzp4MIihmr"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="rounded-lg shadow-lg border border-gray-700 backdrop-blur-md transition-transform transform hover:scale-105"
    ></iframe>
  </div>

  {/* Right Side: Module Details */}
  <div className="lg:w-1/2 p-8">
    <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gradient bg-clip-text text-transparent text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-950 to-gray-900">
      Module 5
    </h1>
    <h2 className="text-3xl lg:text-4xl font-medium mb-2 text-gray-200">
      Placement Training 2
    </h2>
    <div className="w-1/2 border-b-4 border-gradient-to-r from-teal-400 to-amber-500 mb-6"></div>
    <p className="text-lg text-gray-300">
      This module is designed to help you feel confident and prepared for technical interviews with companies. You will practice taking technical aptitude tests, participate in a mock interview, and work through recently asked interview questions. You will also have the opportunity to create a powerful and effective resume. By the end of this module, you will have the skills and knowledge needed to succeed in the job interview process.
    </p>
  </div>
</div>

<div className="flex flex-col lg:flex-row bg-black px-5 py-16">
  {/* Left Side: Trainer Image */}
  <div className="lg:w-1/2 p-8 flex justify-center items-center">
    <img
      src="https://media.licdn.com/dms/image/v2/D5603AQGTY5-YoxpRxQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690812112125?e=1729123200&v=beta&t=xLUrqvSj2XPeNumDEaP0QA371Zgt8wVQaNCdLirgv9I"
      alt="Abhinay Gannavaram"
      className="w-full h-auto rounded-lg shadow-2xl border-4 border-gray-950"
    />
  </div>

  {/* Right Side: Content */}
  <div className="lg:w-1/2 p-8">
    <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gradient  text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-500 to-gray-900">
      Meet Your Trainer
    </h1>
    <h2 className="text-3xl lg:text-4xl font-medium mb-2 text-gray-200">
      Abhinay Gannavaram
    </h2>
    <p className="text-lg text-gray-300 mb-6">
      It has been my privilege to have trained and mentored over 1000
      students at my academy in their journey to become independent
      full-stack developers. As a full-time trainer, I strive to dedicate
      a significant amount of time to providing my students with the
      support and guidance they need to become confident and proficient in
      coding. It's a humbling experience to see them succeed.
    </p>
    <p className="text-lg text-gray-300">
      It has been my privilege to have trained and mentored over 1000
      students at my academy in their journey to become independent
      full-stack developers. As a full-time trainer, I strive to dedicate
      a significant amount of time to providing my students with the
      support and guidance they need to become confident and proficient in
      coding. It's a humbling experience to see them succeed.
    </p>
    <button
      type="button"
      className="mt-6 px-6 py-3 border border-teal-400 bg-transparent text-teal-400 text-lg font-semibold rounded-lg hover:bg-teal-500 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
    >
      Drop Me a Line
    </button>
  </div>
</div>

<div className="px-5 py-16 bg-gradient-to-br bg-black">
  <div className="container mx-auto max-w-5xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className=" p-6 rounded-lg shadow-lg flex flex-col items-center border border-gray-700">
        <svg
          className="text-white mb-6"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="30"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
          <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
        </svg>
        <h3 className="text-lg font-semibold text-white mb-2">Doubt Clarification</h3>
        <div className="w-1/4 border-b-2 border-white mb-4 mt-4"></div>
      </div>

      {/* Card 2 */}
      <div className=" p-6 rounded-lg shadow-lg flex flex-col items-center border border-gray-700">
        <svg
          className="text-white mb-6"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
        </svg>
        <h3 className="text-lg font-semibold text-white mb-2">Live Classes</h3>
        <div className="w-1/4 border-b-2 border-white mb-4 mt-4"></div>
      </div>

      {/* Card 3 */}
      <div className=" p-6 rounded-lg shadow-lg flex flex-col items-center border border-gray-700">
        <svg
          className="text-white mb-6"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
          />
        </svg>
        <h3 className="text-lg font-semibold text-white mb-2">Passionate Mentors</h3>
        <div className="w-1/4 border-b-2 border-white mb-4 mt-4"></div>
      </div>

      {/* Card 4 */}
      <div className="bg-gradient-to- from-teal-500 via-cyan-600 to-sky-500 p-6 rounded-lg shadow-lg flex flex-col items-center border border-gray-700">
        <svg
          className="text-white mb-6"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="40"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"
          />
        </svg>
        <h3 className="text-lg font-semibold text-white mb-2">Project Based Training</h3>
        <div className="w-1/4 border-b-2 border-white mb-4 mt-4"></div>
      </div>

      {/* Card 5 */}
      <div className="bg-gradient-to- from-teal-400 via-cyan-500 to-sky-400 p-6 rounded-lg shadow-lg flex flex-col items-center border border-gray-700">
        <svg
          className="text-white mb-6"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="40"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2H11a2 2 0 0 0-2-2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
        </svg>
        <h3 className="text-lg font-semibold text-white mb-2">Access Lab Facility</h3>
        <div className="w-1/4 border-b-2 border-white mb-4 mt-4"></div>
      </div>

      {/* Card 6 */}
      <div className="bg-gradient-to- from-teal-500 via-cyan-600 to-sky-500 p-6 rounded-lg shadow-lg flex flex-col items-center border border-gray-700">
        <svg
          className="text-white mb-6"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="40"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 1 .5.5V15h11v-.5a.5.5 0 0 1 .5-.5h.5A1.5 1.5 0 0 0 16 12.5v-9A1.5 1.5 0 0 0 14.5 2H12a2 2 0 0 0-2-2H7zM6 2a1 1 0 1 1 2 0H6z" />
        </svg>
        <h3 className="text-lg font-semibold text-white mb-2">Placement Assistance</h3>
        <div className="w-1/4 border-b-2 border-white mb-4 mt-4"></div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default FullStackCourses;