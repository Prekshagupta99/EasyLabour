'use client';

import { useState } from 'react';

export default function Login() {
  const [showEmailLogin, setShowEmailLogin] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-teal-700">Login to EasyLabour</h1>

        {/* Phone Login Section */}
        <form className="space-y-4 mb-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP</label>
            <input
              type="text"
              id="otp"
              placeholder="Enter OTP"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Verify & Continue
          </button>
        </form>

        {/* Divider */}
        <div className="text-center text-sm text-gray-500 mb-4">Don’t want to login with phone?</div>

        {/* Toggle Email Login Section */}
        {!showEmailLogin ? (
          <button
            onClick={() => setShowEmailLogin(true)}
            className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Login with Email Instead
          </button>
        ) : (
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Login with Email
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
