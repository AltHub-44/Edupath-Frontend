import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login.jsx";
import LandingPage from "./pages/index/index.jsx";
import Signup from "./pages/auth/signup.jsx";
import DashboardLayout from "./pages/dashboard/DashboardLayout.jsx";
import Dashboard from "./pages/dashboard/index/Dashboard.jsx";
import Mentor from "./pages/dashboard/Mentor/Mentor.jsx";
import Mentra from "./pages/dashboard/Mentra/Mentra.jsx";
import Settings from "./pages/dashboard/settings/Settings.jsx";
import ChatPage from "./pages/dashboard/Mentor/components/ChatPage.jsx";
import Path from "./pages/dashboard/yourPath/Path.jsx";
import PrivateRoute from "./pages/auth/PrivateRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="mentor" element={<Mentor />} />
          <Route path="mentor/chat" element={<ChatPage />} />
          <Route path="mentra" element={<Mentra />} />
          <Route path="path" element={<Path />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;