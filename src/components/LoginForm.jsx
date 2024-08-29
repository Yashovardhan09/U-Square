import React from "react";

const LoginForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div className="bg-black shadow-lg border border-gray-200 w-full max-w-lg md:max-w-md p-6 rounded-lg relative">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4">
            <a href="/forgot-password" className="text-blue-600 hover:underline mb-2 sm:mb-0">
              Forgot Password?
            </a>
            <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
              <button
                type="button"
                className="w-full sm:w-auto py-2 px-3 bg-gray-900 text-white rounded hover:bg-gray-500 mb-2 sm:mb-0"
              >
                Sign Up
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto py-2 px-3 bg-blue-600 text-white rounded hover:bg-blue-500"
              >
                Login
              </button>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Unable to Login? We are here - contact{" "}
            <a href="mailto:shakhya23@gmail.com" className="text-blue-600 hover:underline">
              usquareacademyadm@gmail.com
            </a>
          </p>
        </form>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-blue-600 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
