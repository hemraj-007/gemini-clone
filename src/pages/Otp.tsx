import React from 'react';
import OtpVerificationForm from '../components/OtpVerificationForm';

const Otp: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 sm:p-10">
        <OtpVerificationForm />
      </div>
    </div>
  );
};

export default Otp;
