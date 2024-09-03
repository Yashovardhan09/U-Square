import React from 'react';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-5 py-16 mt-10">
      <div className="w-full max-w-2xl bg-black border border-gray-600 p-8 rounded-3xl shadow-lg text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 text-green-400">
          Contact Us
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Please fill the form below to reach us
        </p>
        <div className="w-full h-[800px] bg-black p-4 rounded-lg">
          <iframe
            src="https://2qgqcqtjb6d.typeform.com/to/Y6atw9Ee"
            width="100%"
            height="100%"
            frameBorder="0"
            className="border-none rounded-lg"
            allow="geolocation; microphone; camera"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
