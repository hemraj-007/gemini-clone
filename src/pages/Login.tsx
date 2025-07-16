import React, { useState } from 'react';
import PhoneLoginForm from '../components/PhoneLoginForm';

const Login: React.FC = () => {
  const [otpSent, setOtpSent] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 sm:p-10">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Sign In</h1>
        {otpSent ? (
          <p className="text-green-600 text-center font-medium">OTP Sent! Proceed to verify.</p>
        ) : (
          <PhoneLoginForm onOtpSent={() => setOtpSent(true)} />
        )}
      </div>
    </div>
  );
};

export default Login;
