import React from 'react';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-5 py-16 mt-10">
      <div className="w-full max-w-lg bg-black border border-gray-600 p-8 rounded-3xl shadow-lg">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-2 text-green-400">
          Contact Us
        </h2>
        <p className="text-lg text-center mb-8 text-gray-300">
          Please fill the form below to reach us
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2 text-gray-200">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black text-gray-100 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-200">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black text-gray-100 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400" 
                required 
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-lg font-medium mb-2 text-gray-200">Mobile Number</label>
              <input 
                type="tel" 
                id="mobile" 
                name="mobile" 
                placeholder="Your Mobile Number" 
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black text-gray-100 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2 text-gray-200">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Your Message" 
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black text-gray-100 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400" 
                required 
              />
            </div>
          </div>
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
