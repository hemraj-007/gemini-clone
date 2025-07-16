# Gemini Chat App

A modern, responsive chat application built with React, TypeScript, Vite, Zustand, and Tailwind CSS. Gemini allows users to authenticate via phone number and OTP, create and manage chatrooms, and exchange messages (including images) in a simulated chat environment.

## Features

- **Phone Number Authentication**: Users log in using their phone number and a simulated OTP verification flow.
- **Chatrooms**: Create, search, and delete chatrooms. Each chatroom is persistent via local storage.
- **Messaging**: Send text and image messages within chatrooms. Messages are stored locally and persist across sessions.
- **Simulated AI Responses**: The app simulates AI ("Gemini") responses to user messages for demo purposes.
- **Theme Toggle**: Switch between light and dark mode. Theme preference is saved locally.
- **Responsive UI**: Clean, modern interface styled with Tailwind CSS.

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build tool)
- [Zustand](https://zustand-demo.pmnd.rs/) (state management)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS framework)
- [React Router](https://reactrouter.com/) (routing)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (form validation)
- [React Hot Toast](https://react-hot-toast.com/) (notifications)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hemraj-007/gemini-clone
   cd gemini
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Build for Production
```bash
npm run build
```
The output will be in the `dist/` directory.

### Linting
```bash
npm run lint
```

## Usage Overview

1. **Login**: Enter your phone number and select your country code. Submit to receive a simulated OTP.
2. **OTP Verification**: Enter the OTP (any 4+ digit number will work for demo). Upon verification, you'll be redirected to the dashboard.
3. **Dashboard**: View, search, create, or delete chatrooms.
4. **Chatroom**: Send messages (text or images). The app simulates AI responses. Messages and chatrooms persist locally.


## Project Structure

- `src/pages/` — Main pages (Login, OTP, Dashboard, Chatroom)
- `src/components/` — Reusable UI components (chat, dashboard, auth, etc.)
- `src/store/` — Zustand stores for auth, chatrooms, messages, and theme
- `src/assets/` — Static assets

## Notes
- **No backend/API**: All data is stored in the browser (localStorage). OTP and AI chat are simulated for demo purposes.
- **Customization**: You can extend the app to connect to a real backend or AI service as needed.

## License

This project is for educational/demo purposes. Please add your own license if you plan to use it in production.
