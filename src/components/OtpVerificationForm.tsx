import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const OtpVerificationForm: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const { phone, countryCode } = useAuthStore();
  const navigate = useNavigate();

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">Verify OTP</h1>

      <p className="text-center text-gray-600 text-sm">
        Enter the OTP sent to <br />
        <span className="font-semibold text-base text-black">
          +{countryCode} {phone}
        </span>
      </p>

      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="w-full text-center px-4 py-2 border border-gray-300 rounded text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength={6}
      />

      <button
        onClick={handleVerify}
        disabled={otp.length < 4 || loading}
        className={`w-full py-2 rounded font-semibold text-white transition ${
          loading || otp.length < 4
            ? 'bg-blue-300 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {loading ? 'Verifying...' : 'Verify'}
      </button>
    </div>
  );
};

export default OtpVerificationForm;
