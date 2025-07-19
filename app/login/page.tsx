'use client';
import { auth } from '@/firebase';
import {
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { useState } from 'react';

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
    confirmationResult?: any;
  }
}

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [emailMode, setEmailMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        'sign-in-button',
        {
          size: 'invisible',
          callback: () => {
            sendOtp();
          },
          'expired-callback': () => {
            window.recaptchaVerifier?.clear();
            delete window.recaptchaVerifier;
          },
        }
      );
      window.recaptchaVerifier.render().catch(console.error);
    }
  };

  const sendOtp = async () => {
    if (!phone || phone.length !== 10) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    setupRecaptcha(); // Ensure reCAPTCHA is set up
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmation = await signInWithPhoneNumber(auth, '+91' + phone, appVerifier);
      window.confirmationResult = confirmation;
      setOtpSent(true);
      alert('OTP sent to your phone');
    } catch (error) {
      alert('Error sending OTP: ' + (error instanceof Error ? error.message : String(error)));
    }
  };

  const verifyOtp = async () => {
    try {
      await window.confirmationResult.confirm(otp);
      alert('Phone login successful!');
    } catch (error) {
      alert('Invalid OTP: ' + (error instanceof Error ? error.message : String(error)));
    }
  };

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Email login successful!');
    } catch (error) {
      alert('Email login failed: ' + (error instanceof Error ? error.message : String(error)));
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Login to EasyLabour</h1>

      {!emailMode ? (
        <>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
          {otpSent && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border rounded mt-2"
            />
          )}
          <button
            id="sign-in-button"
            onClick={otpSent ? verifyOtp : sendOtp}
            className="w-full bg-teal-600 text-white py-2 rounded mt-2"
          >
            {otpSent ? 'Verify OTP' : 'Send OTP'}
          </button>

          <p className="text-sm text-center mt-2">
            Or{' '}
            <span
              onClick={() => setEmailMode(true)}
              className="text-teal-600 underline cursor-pointer"
            >
              login using Email
            </span>
          </p>
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mt-2"
          />
          <button
            onClick={loginWithEmail}
            className="w-full bg-teal-600 text-white py-2 rounded mt-2"
          >
            Login with Email
          </button>
          <p className="text-sm text-center mt-2">
            Prefer phone login?{' '}
            <span
              onClick={() => setEmailMode(false)}
              className="text-teal-600 underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        </>
      )}
    </div>
  );
}
