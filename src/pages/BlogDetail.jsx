import React from 'react';

const BlogDetail = () => {
  return (
    <div className='bg-gray-950 min-h-screen py-32'>
      <div className='max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg'>
        <h1 className='text-3xl font-bold text-center text-green-950 mb-8'>
          Becoming a Full Stack Developer and Securing a Job in Hyderabad: A Step-by-Step Guide
        </h1>
        <div className='flex items-center text-gray-600 text-sm mb-4'>
          <span className='material-icons mr-2  text-black font-extrabold'>Fri Jan 20, 2023</span> 
          <span className='material-icons mx-4  text-black font-extrabold'>U-Square Academy</span> 
        </div>
        <p className='text-green-900 leading-relaxed'>
          Becoming a full-stack developer and landing a job in Hyderabad can be a challenging but rewarding process. Here are some steps you can take to increase your chances of success:
        </p>
        <ul className='list-disc ml-6 mt-4'>
          <li className='text-yellow-600'>Develop a strong understanding of the core technologies, such as HTML, CSS, JavaScript, and one or more backend frameworks.</li>
          <li className='text-yellow-600'>Build a portfolio with relevant projects that demonstrate your skills and expertise.</li>
          <li className='text-yellow-600'>Network with industry professionals, attend meetups, and seek mentorship.</li>
          <li className='text-yellow-600'>Tailor your resume and applications to specific companies and roles in Bangalore.</li>
          <li className='text-yellow-600'>Stay updated with the latest trends and developments in web development and technology.</li>
        </ul>
        <p className='text-gray-700 leading-relaxed mt-4'>
          Following these steps can help you position yourself as a competitive candidate in the full-stack development market in Hyderabad.
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
