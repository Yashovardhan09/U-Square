import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SalesforceCareers = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className='bg-gray-950 min-h-screen py-32'>
      <div className='max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg'>
        <h1 className='text-3xl font-bold text-center mb-8'>Salesforce Careers</h1>

        
        <div className='mb-12'>
          <Link 
            to='/blog/salesforce_careers/salesforce-developer-opportunity-in-bangalore'
            className='text-2xl font-bold text-blue-600 hover:underline'
          >
            SFMC Email Specialist Opportunity in U-Square at Hyderabad.
          </Link>
          <div className='flex items-center text-gray-600 text-sm my-2'>
            <span className='material-icons mr-2 text-black'></span> Mon Feb 20, 2023
            <span className='material-icons mx-4'></span> Salesforce India
          </div>
          <p className='text-gray-700'>
            If you're looking for a rewarding career as a Salesforce Marketing Cloud and Data Cloud in Hyderabad, you're in luck! Here’s how you can prepare...
            {isReadMore ? (
              <span>
                <br />
                The position requires knowledge of Email Studio, Mobile Studio, and Builders. A strong understanding of Salesforce CRM features and experience in building custom apps on the platform are essential. Join our dynamic team to grow your skills...
              </span>
            ) : (
              <span>... <button onClick={toggleReadMore} className='text-blue-600 hover:underline'>Read more</button></span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesforceCareers;
