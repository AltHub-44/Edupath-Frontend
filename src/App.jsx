import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/login.jsx";
import LandingPage from "./pages/index/index.jsx";
import Signup from "./pages/auth/signup.jsx";
import DashboardLayout from "./pages/dashboard/DashboardLayout.jsx";
import Dashboard from "./pages/dashboard/index/Dashboard.jsx";
import Mentor from "./pages/dashboard/Mentor/Mentor.jsx";
import Mentra from "./pages/dashboard/Mentra/Mentra.jsx";
import Settings from "./pages/dashboard/settings/Settings.jsx";
import Path from "./pages/yourPath/Path.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="mentor" element={<Mentor />} />
        <Route path="mentra" element={<Mentra />} />
        <Route path="path" element={<Path />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
