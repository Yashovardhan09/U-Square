import React from 'react';
import 'animate.css';

const Placements = () => {
  const placementsData = [
    {
      name: "John Doe",
      feedback: "Usquare Academy's Salesforce course was a game-changer for me. It helped me land a role at Salesforce!",
      company: "Salesforce",
      img: "https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "The MERN Stack course at Usquare Academy gave me the skills I needed to excel in web development.",
      company: "Web Solutions",
      img: "https://img.lovepik.com/free-png/20211111/lovepik-a-competent-professional-woman-png-image_400850568_wh1200.png",
    },
    {
      name: "Alex Johnson",
      feedback: "Thanks to Usquare Academy, I now work at Creative Labs with confidence in my development abilities.",
      company: "Creative Labs",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Emily Davis",
      feedback: "Usquare's practical approach to teaching made all the difference. I secured a position at FutureTech!",
      company: "FutureTech",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Michael Brown",
      feedback: "The hands-on projects in the MERN Stack course prepared me perfectly for the job market.",
      company: "Tech Innovators",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Sarah Lee",
      feedback: "Usquare Academy's Salesforce training was instrumental in my career switch into tech.",
      company: "Marketing Pros",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-10 flex justify-center mt-10 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {placementsData.map((placement, index) => (
          <div
            key={index}
            className={`bg-black text-white rounded-3xl shadow-md p-8 text-center transform animate__animated animate__fadeInUp ${index % 2 === 0 ? 'animate__delay-1s' : 'animate__delay-2s'} transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-700`}
          >
            <img
              src={placement.img}
              alt={placement.name}
              className="w-32 h-32 mx-auto rounded-full mb-6 border-2 border-gray-400"
            />
            <h3
              className="text-4xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-70 bg-clip-text text-transparent"
            >
              {placement.name}
            </h3>
            <p className="text-white mb-4">{placement.feedback}</p>
            <p className="text-gray-400 text-3xl">{placement.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placements;
