# Gemini Chat App

A modern, responsive chat application built with React, TypeScript, Vite, Zustand, and Tailwind CSS. Gemini allows users to authenticate via phone number and OTP, create and manage chatrooms, and exchange messages (including images) in a simulated chat environment.

**Live Demo:** [https://gemini-clone-delta-six.vercel.app/](https://gemini-clone-delta-six.vercel.app/)

---

## Table of Contents
- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Setup and Run Instructions](#setup-and-run-instructions)
- [Folder/Component Structure](#foldercomponent-structure)
- [Advanced Features](#advanced-features)
- [Feature Implementation Table](#feature-implementation-table)
- [Notes](#notes)
- [License](#license)

---

## Project Overview
Gemini is a chat app demo with:
- Phone number authentication (simulated OTP)
- Chatroom creation, search, and deletion
- Messaging (text and images) with simulated AI responses
- Local persistence (no backend)
- Responsive, modern UI with theme toggle

---

## Live Demo
[https://gemini-clone-delta-six.vercel.app/](https://gemini-clone-delta-six.vercel.app/)

---

## Setup and Run Instructions

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

---

## Folder/Component Structure

- **src/pages/**
  - `Login.tsx`: Phone login and OTP entry page
  - `Otp.tsx`: OTP verification page
  - `Dashboard.tsx`: Chatroom dashboard (list, search, create, delete)
  - `Chatroom.tsx`: Chat interface for a specific chatroom
- **src/components/**
  - `PhoneLoginForm.tsx`: Phone number input and validation
  - `OtpVerificationForm.tsx`: OTP input and validation
  - `ThemeToggle.tsx`: Light/dark mode toggle
  - `MessageSkeleton.tsx`, `MessageSkeleton1.tsx`: Loading skeletons
  - **chat/**: Chatroom UI components
    - `MessageInput.tsx`: Message input (text/image)
    - `MessageList.tsx`: List of messages in a chatroom
    - `MessageBubble.tsx`: Individual message display
    - `TypingIndicator.tsx`: Shows when AI is “typing”
    - `ChatHeader.tsx`: Chatroom header/navigation
  - **dashboard/**: Dashboard UI components
    - `ChatroomList.tsx`: List/search chatrooms
    - `CreateChatroomModal.tsx`: Create new chatroom
    - `ChatroomCard.tsx`: Individual chatroom card
    - `SearchInput.tsx`: Search bar for chatrooms
  - **auth/**: (Alternate location for auth components)
- **src/store/**
  - `authStore.ts`: Auth state (phone, country code)
  - `chatroomStore.ts`: Chatroom state (CRUD, search)
  - `messageStore.ts`: Message state (per chatroom)
  - `themeStore.ts`: Theme state (light/dark)
- **src/assets/**: Static assets

---

## Advanced Features

### Form Validation
- **Where:** `PhoneLoginForm.tsx`, `OtpVerificationForm.tsx`
- **How:**
  - Uses `react-hook-form` for form state management.
  - Uses `zod` for schema-based validation (e.g., phone number length, required country code).
  - Validation errors are shown inline.

### Simulated AI Response
- When a user sends a message, a simulated AI (“Gemini”) responds after a 1-second delay (see `simulateAIResponse` in `Chatroom.tsx`).

---

## Feature Implementation Table

| Feature         | Implementation Details                                                                 |
|-----------------|---------------------------------------------------------------------------------------|
| Form Validation | `react-hook-form` + `zod` in login/OTP forms                                          |
| Simulated AI    | 1-second delayed response in chatroom                                                 |

---

## Notes
- **No backend/API**: All data is stored in the browser (localStorage). OTP and AI chat are simulated for demo purposes.
- **Customization**: You can extend the app to connect to a real backend or AI service as needed.

## License

This project is for educational/demo purposes. Please add your own license if you plan to use it in production.
