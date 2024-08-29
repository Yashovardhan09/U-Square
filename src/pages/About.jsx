import React from 'react';
import { FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './About.css'

const About = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: subtitleRef, inView: subtitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Inline styles
  const cardStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
    border: '1px solid rgba(255, 255, 255, 0.2)', // Light border
    padding: '1.5rem', // Increased padding
    borderRadius: '0.75rem', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Soft shadow
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
    textAlign: 'left',
    color: 'white',
    backdropFilter: 'blur(10px)', // Glass effect
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'translateY(-5px)', // Slight lift effect on hover
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4)', // Enhanced shadow on hover
  };

  return (
    <div>
      {/* About Section */}
      <div className="about-section bg-black px-5 py-16 mt-18 pt-40">
        <motion.h1
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent text-white"
        >
          Meet U-Square Academy
        </motion.h1>
        <h3 className='text-white text-center mt-2 text-xl mb-3 font-bold'>4-Month Comprehensive Data Cloud, Marketing Cloud and Javascript Cohort</h3>
        <p className="text-base sm:text-lg lg:text-2xl text-left max-w-4xl mx-auto font-light leading-relaxed text-gray-300">
        Our course is carefully designed to transform you from a beginner to an expert in Salesforce and Front End Development. From day one, you'll dive into hands-on learning, interview preparation, real-world project exploration, and interactive sessions to build your knowledge and confidence. Our primary goal is to respect each student's unique learning style and provide flexible, personalized attention to ensure your career success.
        </p>
      </div>

      {/* What Makes Us Different Section */}
      <div className="different-section bg-black px-5 py-16">
        <motion.h2
          ref={subtitleRef}
          variants={subtitleVariants}
          initial="hidden"
          animate={subtitleInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-5xl lg:text-4xl font-serif text-left mx-auto relative max-w-4xl bg-clip-text text-transparent text-white"
        >
          WHAT MAKES US
          
            DIFFERENT
          
        </motion.h2>
        <p className="text-sm sm:text-lg lg:text-2xl text-left max-w-6xl mx-auto font-light leading-relaxed mt-6 pl-20 text-gray-300">
          We stand out due to our personalized training approach, real-world project-based learning, and dedicated mentorship. Our focus is not just on coding but on problem-solving, critical thinking, and collaboration, preparing our students for success in the industry.
        </p>
      </div>

      {/* Cards Section */}
      <div className="cards-section bg-black px-5 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="scroll-container mt-12">
            {/* Card 1 */}
            <div className='scroll-content'>
            <div
              style={cardStyle}
              className="card hover:scale-105 flex flex-col items-center text-left mb-6"
            >
              <svg className="mb-6 text-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
              </svg>
              <h3 className="text-xl mt-6 sm:text-2xl lg:text-3xl font-semibold mb-2">Low Student to Teacher Ratio</h3>
              <p className="text-sm sm:text-base lg:text-lg">Interact with the trainers directly to get your doubts clarified.</p>
            </div>

            {/* Card 2 */}
            <div
              style={cardStyle}
              className="card hover:scale-105 flex flex-col items-center text-left mb-6"
            >
              <svg className="mb-6 text-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25"/>
              </svg>
              <h3 className="text-xl mt-6 sm:text-2xl lg:text-3xl font-semibold mb-2">Training based on your abilities</h3>
              <p className="text-sm sm:text-base lg:text-lg">Irrespective of your background you'll learn programming the right way</p>
            </div>

            {/* Card 3 */}
            <div
              style={cardStyle}
              className="card hover:scale-105 flex flex-col items-center text-left mb-6"
            >
              <svg className="mb-6 text-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
              </svg>
              <h3 className="text-xl mt-6 sm:text-2xl lg:text-3xl font-semibold mb-2">100% Job Assistance</h3>
              <p className="text-sm sm:text-base lg:text-lg">Get placed at top tech companies, with our placement training and support.</p>
            </div>

            {/* Card 4 */}
            <div
              style={cardStyle}
              className="card hover:scale-105 flex flex-col items-center text-left mb-6"
            >
              <svg className="mb-6 text-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.93 6.588L12 4.694V11.5a.5.5 0 0 1-.757.429L8 10 4.757 11.93A.5.5 0 0 1 4 11.5V4.694l3.07 1.894a.5.5 0 0 0 .86 0z"/>
                <path d="M8 4.077L3.07 1.077a.5.5 0 0 0-.77.423v13a.5.5 0 0 0 .77.423L8 11.923l4.93 2.923a.5.5 0 0 0 .77-.423v-13a.5.5 0 0 0-.77-.423L8 4.077z"/>
              </svg>
              <h3 className="text-xl mt-6 sm:text-2xl lg:text-3xl font-semibold mb-2">Fully Responsive Courses</h3>
              <p className="text-sm sm:text-base lg:text-lg">Learn from anywhere, on any device, without compromising quality.</p>
            </div>

            </div>
          </div>
        </div>
      </div>

      {/* New Section with Image on the Left and Content on the Right */}
      <div className="profile-section bg-black text-white py-16">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center lg:items-start px-5">
          {/* Image on the left */}
          {/* <div className="image-wrapper flex-shrink-0  mb-6 lg:mb-0 lg:mr-8">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGTY5-YoxpRxQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1690812112125?e=1729728000&v=beta&t=Oqpj_jKrjIF0umJ5gjGUEuExA5dvY2izYJni1rI9s2w"
              alt="Abhinay Gannavaram"
              className="w-48 h-48 rounded-full shadow-lg border-4 border-gray-700 object-cover"
            />
          </div> */}

          {/* Content on the right */}
          <div className="content flex-grow">
            <h3 className="text-3xl font-semibold mb-2">Abhinay Gannavaram</h3>
            <h4 className="text-xl text-gray-400 mb-4">Salesforce and Fullstack Trainer</h4>
            <p className="text-lg leading-relaxed mb-4 text-white">
              It has been my privilege to have trained and mentored over 1000 students at my academy in their journey to become independent full-stack developers. As a full-time trainer, I strive to dedicate a significant amount of time to providing my students with the support and guidance they need to become confident and proficient in coding; it's a humbling experience to see them succeed.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Please write to me at <a href="mailto:usquareacademy@gmail.com" className="text-yellow-400 hover:underline">contact@usquareacademy.com</a>
            </p>

            {/* Social Icons */}
            <div className="social-icons flex space-x-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                <FaTwitter size={28} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                <FaFacebook size={28} />
              </a>
              <a href="mailto:usquareacademy@gmail.com" className="text-gray-400 hover:text-gray-500">
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
