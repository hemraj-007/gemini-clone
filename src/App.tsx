import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Dashboard from "./pages/Dashboard";
import Chatroom from "./pages/Chatroom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chatroom/:id" element={<Chatroom />} />
    </Routes>
  );
}

export default App;
