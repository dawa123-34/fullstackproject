import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyOtpPage = () => {
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otpDigits];
      newOtp[index] = value;
      setOtpDigits(newOtp);

      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleVerify = async () => {
    const otp = otpDigits.join('');
    const email = localStorage.getItem('email');

    if (!email) {
      alert(' Email not found. Please restart the verification process.');
      return;
    }

    if (otp.length !== 4) {
      alert(' Please enter all 4 digits of the OTP.');
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/verifyOtp`, {
        email,
        otp,
      });

      if (response.data.message === 'otp is correct') {
        alert(' OTP Verified Successfully!');
        navigate('/resetPassword');
      }
    } catch (error) {
      const message = error?.response?.data?.message || 'Something went wrong';
      if (message === 'Invalid otp') {
        alert(' OTP did not match. Please try again.');
        setOtpDigits(['', '', '', '']);
        document.getElementById('otp-0')?.focus();
      } else if (message === 'OTP has expired') {
        alert('OTP has expired. Please request a new one.');
      } else {
        alert(` Error: ${message}`);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Verify OTP</h2>
        <p className="text-sm text-center mb-6 text-gray-600">
          Please enter the 4-digit OTP sent to your email.
        </p>

        <div className="flex justify-between mb-4">
          {otpDigits.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
