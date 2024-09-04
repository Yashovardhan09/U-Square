import React from 'react';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-5 py-16 mt-10">
      <div className="w-full max-w-4xl bg-black p-4 sm:p-8 rounded-3xl shadow-lg text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 text-green-400">
          Contact Us
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Please fill the form below to reach us
        </p>
        <div className="relative w-full h-[80vh] sm:h-[60vh] lg:h-[650px] rounded-lg overflow-hidden">
          <iframe
            src="https://2qgqcqtjb6d.typeform.com/to/Y6atw9Ee"
            width="100%"
            height="100%"
            frameBorder="0"
            className="absolute top-0 left-0 w-full h-full border-none rounded-lg"
            style={{ transform: "scale(1)", transformOrigin: "top left" }}
            allow="geolocation; microphone; camera"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
