import React from 'react'

const RefundPolicy = () => {
  return (
    <div className='min-h-screen bg-black flex flex-col justify-center items-center'>
      <div className="refund-policy-section w-full px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-8">
            Refund Policy
          </h1>
          
          <div className="bg-black bg-opacity-30 rounded-lg p-8 shadow-lg">
            <p className="text-lg sm:text-xl text-white leading-relaxed mb-6">
              Thank you for shopping at <a href="https://www.usquareacademy.com" className="underline text-gray-400 hover:text-gray-300">www.usquareacademy.com</a>.
            </p>

            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Non-tangible Irrevocable Goods ("Digital Products")
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-6">
              We do not issue refunds for non-tangible irrevocable goods ("digital products") once the order is confirmed and the product is sent.
            </p>
            
            <p className="text-base sm:text-lg text-gray-400 mb-8">
              We recommend contacting us for assistance if you experience any issues receiving or downloading our products.
            </p>

            <h2 className="text-2xl font-semibold text-gray-300 mb-4">Contact Us for Any Issues:</h2>
            <p className="text-base sm:text-lg text-gray-400 mb-8">
              If you have any questions about our Returns and Refunds Policy, please contact us at:
            </p>

            <p className="text-base sm:text-lg font-semibold text-gray-500">
              <a href="mailto:contact@usquareacademy.com" className="underline text-gray-400 hover:text-gray-300">
              contact@usquareacademy.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy;
