import { useState } from 'react';
import '../styles-auth/login.css';
import logo from "../assets/logo.png";
import loginPic from "../assets/login.png";
import RememberMe from "./RememberMe";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add your authentication logic codes.
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="container">
   

    <div className="login-container">
      <div className="login-card">
         <img src={logo} alt="logo" />
         <p>Login into your account</p>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="additional-links">
            <div id="remember"> <RememberMe/> <span>Remember me</span></div>
         
          <a href="/forgot-password">Recover password</a>
        </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="additional-links">
        
         <Link to="/signup">Do not have an account?</Link>
      
        </div>
      </div>
    </div>

    <img src={loginPic} alt="login" />
    </div>
  );
};

export default Login;
