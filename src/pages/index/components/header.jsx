import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "@/assets/logo.png";
import useMenu from "../../../hooks/useMenu";

const Header = () => {
  const { menuOpen, toggleMenu, scrollToSection } = useMenu();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue300 font-semibold border-b-2 border-blue300"
      : "text-gray-700 ";

  return (
    <header className="relative">
      <nav className="flex justify-between items-center p-4">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className="h-20" />
        </Link>

        <ul className="hidden lg:flex gap-10 items-center text-lg font-epilogue">
          <li className={`hover:text-blue-500 ${isActive("/")}`}>
            <button
              className="cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          <li className={`hover:text-blue-500 ${isActive("/about")}`}>
            <button
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              About EduPath
            </button>
          </li>
          <li className={`hover:text-blue-500 ${isActive("/mentors")}`}>
            <Link to="/mentors">For Mentors</Link>
          </li>
          <li className={`hover:text-blue-500 ${isActive("/contact")}`}>
            <button
              className="cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </button>
          </li>
        </ul>

        <div className="hidden lg:flex gap-5 items-center">
          <Link
            to="/login"
            className={`border border-gray-300 py-2 px-4 rounded-md ${isActive(
              "/login"
            )}`}
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className={`bg-blue-500 text-white py-2 px-3 rounded-lg flex items-center gap-3 ${isActive(
              "/signup"
            )}`}
          >
            Get Started <span>→</span>
          </Link>
        </div>

        <button className="lg:hidden text-3xl" onClick={toggleMenu}>
          <Icon icon="mdi:menu" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:hidden flex flex-col items-center justify-center gap-6 text-xl`}
      >
        <button
          className="absolute top-5 right-5 text-3xl"
          onClick={toggleMenu}
        >
          <Icon icon="mdi:close" />
        </button>

        <button
          className={`hover:text-blue-500 ${isActive("/")}`}
          onClick={() => scrollToSection("home")}
        >
          Home
        </button>
        <button
          className={`hover:text-blue-500 ${isActive("/about")}`}
          onClick={() => scrollToSection("about")}
        >
          About EduPath
        </button>
        <button
          className={`hover:text-blue-500 ${isActive("/contact")}`}
          onClick={() => scrollToSection("contact")}
        >
          Contact Us
        </button>

        <Link
          to="/login"
          className={`border border-gray-300 py-2 px-4 rounded-md ${isActive(
            "/login"
          )}`}
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${isActive(
            "/signup"
          )}`}
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;
