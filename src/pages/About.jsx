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
          Meet U Square Academy
        </motion.h1>
        <h3 className='text-white text-center mt-2 text-xl mb-3 font-bold'>4-Month Comprehensive Data Cloud, Marketing Cloud and Javascript Cohort</h3>
        <p className="text-base sm:text-lg lg:text-2xl text-left max-w-4xl mx-auto font-light leading-relaxed text-gray-300">
          Our course is carefully designed to transform you from a beginner to an expert in Salesforce and Front End Development. From day one, you'll dive into hands-on learning, interview preparation, real-world project exploration, and interactive sessions to build your knowledge and confidence. Our primary goal is to respect each student's unique learning style and provide flexible, personalized attention to ensure your career success.
        </p>
      </div>

      {/* What Makes Us Different Section */}
      <div className="different-section bg-black px-5 py-16 flex flex-col items-center">
  <motion.h2
    ref={subtitleRef}
    variants={subtitleVariants}
    initial="hidden"
    animate={subtitleInView ? "visible" : "hidden"}
    transition={{ duration: 0.8 }}
    className="text-2xl sm:text-5xl lg:text-4xl font-serif text-center max-w-4xl bg-clip-text text-transparent text-white"
  >
    WHAT MAKES US
    <br />
    DIFFERENT
  </motion.h2>
  <p className="text-sm sm:text-lg lg:text-2xl text-center max-w-6xl font-light leading-relaxed mt-6 text-gray-300">
    We stand out due to our personalized training approach, real-world project-based learning, and dedicated mentorship. Our focus is not just on coding but on problem-solving, critical thinking, and collaboration, preparing our students for success in the industry.
  </p>
</div>


      {/* Cards Section */}
      <div className="cards-section bg-black px-5 py-16">
  <div className="container mx-auto max-w-4xl grid grid-cols-2 gap-8 justify-items-center">
    {/* Card 1 */}
    <div
      style={cardStyle}
      className="card flex flex-col items-center text-left bg-[#15202B] p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
    >
      <svg className="mb-4 text-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
      </svg>
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Low Student to Teacher Ratio</h3>
      <p className="text-sm sm:text-base text-gray-400">Interact with the trainers directly to get your doubts clarified.</p>
    </div>

    {/* Card 2 */}
    <div
      style={cardStyle}
      className="card flex flex-col items-center text-left bg-[#15202B] p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="mb-4 text-white" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75zM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765M16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516zm-8 3.3 5.693-3.162L0 6.873v6.5Z"/>
      </svg>
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Job Assistance</h3>
      <p className="text-sm sm:text-base text-gray-400">Receive dedicated support for job placement and career growth.</p>
    </div>

    {/* Card 3 */}
    <div
      style={cardStyle}
      className="card flex flex-col items-center text-left bg-[#15202B] p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="mb-4 text-white" viewBox="0 0 16 16">
        <path d="M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5z"/>
        <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
      </svg>
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">High-Quality Resources</h3>
      <p className="text-sm sm:text-base text-gray-400">Access top-notch study materials, tools, and resources.</p>
    </div>

    {/* Card 4 */}
    <div
      style={cardStyle}
      className="card flex flex-col items-center text-left bg-[#15202B] p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pc-display-horizontal" viewBox="0 0 16 16">
  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25"/>
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
