import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/login.jsx";
import LandingPage from "./pages/index/index.jsx";
import Signup from "./pages/auth/signup.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> 
    </Routes>
  );
}

export default App;