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

  // Enhanced card styles
  const cardStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly more opaque
    border: '1px solid rgba(255, 255, 255, 0.3)', // Subtle border
    padding: '2rem', // Increased padding for better content spacing
    borderRadius: '1rem', // More rounded corners
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)', // More prominent shadow
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
    textAlign: 'left',
    color: 'white',
    backdropFilter: 'blur(12px)', // Stronger glass effect
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'translateY(-10px)', // Enhanced lift effect on hover
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.6)', // More pronounced shadow on hover
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
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div
            style={cardStyle}
            className="card flex flex-col items-center text-left"
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
            className="card flex flex-col items-center text-left"
          >
            <svg className="mb-6 text-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25M14.25 14h-5.5a.25.25 0 0 1 0-.5h5.5a.25.25 0 0 1 0 .5"/>
            </svg>
            <h3 className="text-xl mt-6 sm:text-2xl lg:text-3xl font-semibold mb-2">Job Assistance</h3>
            <p className="text-sm sm:text-base lg:text-lg">Receive dedicated support for job placement and career growth.</p>
          </div>

          {/* Card 3 */}
          <div
            style={cardStyle}
            className="card flex flex-col items-center text-left"
          >
            <svg className="mb-6 text-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10.354 5.646a.5.5 0 0 0-.708 0L7 7.793 6.354 7.146a.5.5 0 0 0-.708.708L7.293 9l-1.647 1.646a.5.5 0 0 0 .708.708L7 9.707l1.646 1.646a.5.5 0 0 0 .708-.708L8.707 9l1.646-1.646a.5.5 0 0 0 0-.708z"/>
              <path d="M8.5 0a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V1a.5.5 0 0 0-.5-.5z"/>
              <path d="M8 16a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-1 0v6.5a.5.5 0 0 0 .5.5z"/>
              <path d="M2.5 16a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-1 0v6.5a.5.5 0 0 0 .5.5z"/>
              <path d="M2 8.5a.5.5 0 0 0 .5-.5v-6A.5.5 0 0 0 2 1.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5zM5 0a.5.5 0 0 0-.5.5V4a.5.5 0 0 0 1 0V.5A.5.5 0 0 0 5 0z"/>
              <path d="M5 16a.5.5 0 0 0 .5-.5V12a.5.5 0 0 0-1 0v3.5a.5.5 0 0 0 .5.5z"/>
              <path d="M13.5 16a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-1 0v6.5a.5.5 0 0 0 .5.5z"/>
            </svg>
            <h3 className="text-xl mt-6 sm:text-2xl lg:text-3xl font-semibold mb-2">High-Quality Resources</h3>
            <p className="text-sm sm:text-base lg:text-lg">Access top-notch study materials, tools, and resources.</p>
          </div>

          {/* Card 4 */}
          <div
            style={cardStyle}
            className="card flex flex-col items-center text-left"
          >
            <svg className="mb-6 text-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.5 0a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V.5a.5.5 0 0 0-.5-.5zM5 16a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-1 0v6.5a.5.5 0 0 0 .5.5zM10.5 0a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V.5a.5.5 0 0 0-.5-.5zM13 16a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-1 0v6.5a.5.5 0 0 0 .5.5z"/>
            </svg>
            <h3 className="text-xl mt-6 sm:text-2xl lg:text-3xl font-semibold mb-2">Extensive Project Work</h3>
            <p className="text-sm sm:text-base lg:text-lg">Work on real-world projects to build practical skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
