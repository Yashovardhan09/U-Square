import React from 'react';

const MERNStack = () => {
  return (
    <div className="min-h-screen mt-10 bg-black text-white flex flex-col justify-center items-center px-5 py-16">
      <div className="w-full max-w-3xl bg-black border border-gray-600 p-8 rounded-3xl shadow-lg">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-8 text-green-400">
          MERNStack Chronology
        </h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b border-gray-600 pb-2 text-lg">Module</th>
              <th className="border-b border-gray-600 pb-2 text-lg">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 border-b border-gray-600">JavaScript Precourse</td>
              <td className="py-2 border-b border-gray-600">1 Week</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-gray-600">JavaScript Level 1</td>
              <td className="py-2 border-b border-gray-600">1 Week</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-gray-600">JavaScript Level 2</td>
              <td className="py-2 border-b border-gray-600">2 Weeks</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-gray-600">JavaScript Level 3</td>
              <td className="py-2 border-b border-gray-600">1 Week</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-gray-600">React Level 1</td>
              <td className="py-2 border-b border-gray-600">2 Weeks</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-gray-600">React Level 2</td>
              <td className="py-2 border-b border-gray-600">2 Weeks</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-gray-600">Redux</td>
              <td className="py-2 border-b border-gray-600">1 Week</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-gray-600">MongoDB</td>
              <td className="py-2 border-b border-gray-600">1 Week</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-gray-600">Next.js</td>
              <td className="py-2 border-b border-gray-600">1 Week</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-gray-600">Portfolio Projects</td>
              <td className="py-2 border-b border-gray-600">2 Weeks</td>
            </tr>
            <tr>
              <td className="py-2 border-b border-gray-600">Profile Buildup</td>
              <td className="py-2 border-b border-gray-600">1 Day - 1:1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MERNStack;
