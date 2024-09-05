import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import bloggImage from '../assets/blogg.jpg'; // Ensure this path is correct

const FreeCourses = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://e0.pxfuel.com/wallpapers/92/159/desktop-wallpaper-salesforce-dreamforce-thumbnail.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PwRQttmK18ZBYWADrccj8tjjsnIWtDFvqQ&s'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    navigate('/course-details'); 
  };

  return (
    <div
      className='bg-black min-h-screen py-16 relative'
      style={{
        // backgroundImage: `url(${bloggImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(80%)',
      }}
    >
      <div className='flex flex-col items-center gap-6 mt-24 relative z-10'>
        <div className='w-full sm:w-80 md:w-72 p-4 max-w-xs bg-black border shadow-lg rounded-xl'>
          <div className='flex flex-col items-center'>
            <img
              src={images[currentImageIndex]}
              alt="Salesforce and JavaScript"
              style={{ height: '200px', objectFit: 'cover' }}
              className='w-full rounded-lg mb-4 transition-opacity duration-1000'
            />
            <h2 className='text-xl font-semibold text-yellow-400 mb-2'>
              Salesforce and JavaScript for Beginners
            </h2>
            <p className='text-sm text-green-300 mb-4'>
              U-Square Academy
            </p>
            <button
              onClick={handleButtonClick}
              className='bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 text-center'
            >
              Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeCourses;
