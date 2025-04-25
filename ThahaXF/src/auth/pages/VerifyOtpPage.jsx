import React from 'react'

const VerifyOtpPage = () => {
  return (
    <div>
      <div class="flex justify-center items-center min-h-screen bg-gray-100">
  <div class="bg-white p-6 rounded-lg shadow-lg w-96">
    <h2 class="text-xl font-semibold text-center mb-4">Verify OTP</h2>
    <p class="text-sm text-center mb-6">Please enter the 4-digit OTP sent to your email.</p>

    <div class="flex justify-between mb-4">
      <input
        type="text"
        maxlength="1"
        class="w-12 h-12 text-center text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        maxlength="1"
        class="w-12 h-12 text-center text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        maxlength="1"
        class="w-12 h-12 text-center text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        maxlength="1"
        class="w-12 h-12 text-center text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button
      class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Verify OTP
    </button>
  </div>
</div>

    </div>
  )
}

export default VerifyOtpPage
