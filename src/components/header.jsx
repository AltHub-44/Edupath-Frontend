

import "../styles/header.css";
import logo from "../assets/logo.png";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const Header = ({ scrollToSection }) => {
  const navigate = useNavigate(); //  Get navigate function
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection("home")}>Home</button></li>
          <li><button onClick={() => scrollToSection("about")}>About EduPath</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Contact Us</button></li>
        </ul>
        <div className="auth-buttons">
        <button  className="login" onClick={() => navigate("/login")}>Login</button>
        <button className="get-started">Get Started →</button>
      </div>
      </nav>
    </header>
  );
};
Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Header;

