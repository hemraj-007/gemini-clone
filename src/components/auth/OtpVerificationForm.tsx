import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

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
      <p className="text-center text-gray-600">
        Enter the OTP sent to <strong>+{countryCode} {phone}</strong>
      </p>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="w-full p-2 border rounded text-center text-lg tracking-widest"
        maxLength={6}
      />
      <button
        onClick={handleVerify}
        disabled={otp.length < 4 || loading}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        {loading ? 'Verifying...' : 'Verify'}
      </button>
    </div>
  );
};

export default OtpVerificationForm;
