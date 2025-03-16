// SignUp.js
import { useState } from 'react';
import '../styles/auth/signUp.css';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import signUp from "../assets/signup.png";

const SignUp = () => {
    
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Proceed with form submission (e.g., API call)
      console.log('Form submitted successfully:', formData);
    }
  };

  // Validate form inputs
  const validate = (data) => {
    const errors = {};
    if (!data.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.password) errors.password = 'Password is required';
    if (data.password !== data.confirmPassword)
      errors.confirmPassword = 'Passwords do not match';
    return errors;
  };

  return (
    <div className="singUp">
    <div className='front'>
     <img src={logo} alt="logo" />
    
    <p>
      Have an account? <Link to="/login">Sign In</Link>
    </p>
  </div>

  <div className="form">
    <div className="image">
    <img src={signUp} alt="signUp picture" />
    </div>
    <form onSubmit={handleSubmit} className="signup-form">
      
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button type="submit">Create Account</button>
      <p>By continuing you indicate that you read and agreed to the terms of use</p> 
    </form>
  
    </div>
    
    </div>
  );
};

export default SignUp;
