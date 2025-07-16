import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  countryCode: z.string().min(1, 'Select a country code'),
  phone: z.string().min(5, 'Phone number too short'),
});

type FormData = z.infer<typeof schema>;

const PhoneLoginForm: React.FC<{ onOtpSent: () => void }> = ({ onOtpSent }) => {
  const [countries, setCountries] = useState<{ name: string; callingCodes: string[] }[]>([]);
  const [loading, setLoading] = useState(false);
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,callingCodes')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const onSubmit = (data: FormData) => {
    setLoading(true);
    setAuth(data.countryCode, data.phone);

    setTimeout(() => {
      onOtpSent();
      navigate('/otp');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Country Code Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Country Code</label>
        <select
          {...register('countryCode')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a country</option>
          {countries.map((c, i) => (
            <option key={i} value={c.callingCodes[0]}>
              {c.name} (+{c.callingCodes[0]})
            </option>
          ))}
        </select>
        {errors.countryCode && (
          <p className="text-sm text-red-500 mt-1">{errors.countryCode.message}</p>
        )}
      </div>

      {/* Phone Number Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Button with loader */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
      >
        {loading ? 'Sending OTP...' : 'Send OTP'}
      </button>
    </form>
  );
};

export default PhoneLoginForm;
