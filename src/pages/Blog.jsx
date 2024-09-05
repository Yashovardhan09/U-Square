import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bloggImage from '../assets/blogg.jpg'; // Ensure this path is correct

const Blog = () => {
  const [isReadMoreFullStack, setIsReadMoreFullStack] = useState(false);
  const [isReadMoreSalesforce, setIsReadMoreSalesforce] = useState(false);

  const toggleReadMoreFullStack = () => {
    setIsReadMoreFullStack(!isReadMoreFullStack);
  };

  const toggleReadMoreSalesforce = () => {
    setIsReadMoreSalesforce(!isReadMoreSalesforce);
  };

  useEffect(() => {
    const headings = document.querySelectorAll('.animate');
    headings.forEach((heading, index) => {
      heading.style.animationDelay = `${index * 0.3}s`; // Delays each heading's animation
      heading.classList.add('fade-in');
    });
  }, []);

  return (
    <div
      className='relative bg-cover bg-black bg-center min-h-screen pt-20 flex justify-center'
      // style={{ backgroundImage: `url(${bloggImage})` }}
    >
      <div className='absolute inset-0 bg-black opacity-60'></div> {/* Overlay for better text readability */}
      <div className='relative max-w-4xl mx-auto p-6 bg-black shadow-lg rounded-lg z-10 flex flex-col space-y-8'>
        
        <div className='mb-12'>
          <Link
            to='/blog/becoming-a-full-stack-developer-and-securing-a-job-in-bangalore-a-step-by-step-guide'
            className='text-3xl font-extrabold text-white hover:underline animate'
          >
            Becoming a Full Stack Developer and Securing a Job in Hyderabad: A Step-by-Step Guide
          </Link>
          <div className='flex items-center text-gray-400 text-sm my-2'>
            {/* <span className='material-icons mr-2'>access_time</span> Fri Jan 20, 2023
            <span className='material-icons mx-4'>face</span> U-Square Academy */}
          </div>
          <p className='text-gray-300'>
            Becoming a full-stack developer and landing a job in Bangalore can be a challenging but rewarding process. Here are some steps you can take to increase your chances of success...
            {isReadMoreFullStack ? (
              <span>
                <br />
                Develop a strong understanding of both front-end and back-end technologies like React, Node.js, and databases. Build projects to showcase your skills and network with professionals in the industry. Keep up with the latest trends in full-stack development and prepare for technical interviews...
              </span>
            ) : (
              <span>... <button onClick={toggleReadMoreFullStack} className='text-teal-400 hover:underline'>Read more</button></span>
            )}
          </p>
        </div>

        <div className='mb-12'>
          <Link
            to='/blog/salesforce_careers'
            className='text-3xl font-extrabold text-white hover:underline animate'
          >
            Salesforce Careers: Opportunities and Growth
          </Link>
          <div className='flex items-center text-gray-400 text-sm my-2'>
            {/* <span className='material-icons mr-2'>access_time</span> Mon Feb 20, 2023
            <span className='material-icons mx-4'>face</span> Salesforce India */}
          </div>
          <p className='text-gray-300'>
            Salesforce careers are in high demand due to the platform's extensive use in various industries. Here's how to begin your Salesforce career journey...
            {isReadMoreSalesforce ? (
              <span>
                <br />
                Roles such as Salesforce Administrators, Developers, and Consultants are highly sought after. Gaining Salesforce certifications, understanding its ecosystem, and networking with professionals can significantly boost your career prospects. Learn the key skills needed and best practices to excel...
              </span>
            ) : (
              <span>... <button onClick={toggleReadMoreSalesforce} className='text-teal-400 hover:underline'>Read more</button></span>
            )}
          </p>
        </div>

        {/* Additional Content */}
        <div className='mb-12'>
          <h2 className='text-3xl font-extrabold text-white mb-4'>More Insights and Tips</h2>
          <p className='text-gray-300'>
            Stay tuned for more articles and resources on career development, industry insights, and tips for success. Our blog is here to provide valuable information and guidance as you navigate your professional journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
