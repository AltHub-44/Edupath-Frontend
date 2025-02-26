
import '../styles/header.css';
import logo from '../assets/logo.png'; 

const Header = () => (
  <header>
    <nav className="navbar">
      <div className="logo"> <img src={logo} alt="logo" /></div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About EduPath</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="get-started">Get Started →</button>
      </div>
    </nav>
  </header>
);

export default Header;
