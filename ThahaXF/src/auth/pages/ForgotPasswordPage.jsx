import React from 'react'

const ForgotPasswordPage = () => {
  return (
    <div>
      <div class="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-center text-3xl font-extrabold text-gray-900">Forgot Password</h2>
    <p class="mt-2 text-center text-sm text-gray-600">
      Enter your email address to receive a One-Time Password (OTP) for password reset.
    </p>

    <form class="mt-8 space-y-6">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Email address"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Send OTP
        </button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default ForgotPasswordPage
