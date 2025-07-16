// src/store/authStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  countryCode: string;
  phone: string;
  setAuth: (countryCode: string, phone: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      countryCode: '',
      phone: '',
      setAuth: (countryCode, phone) => set({ countryCode, phone }),
    }),
    { name: 'auth-store' }
  )
);
