import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="relative">
      <nav className="flex justify-between items-center p-4">
        <div className="logo">
          <img src={logo} alt="logo" className="h-20" />
        </div>

        <ul className="hidden lg:flex gap-10 items-center text-gray-700">
          <li className="hover:text-blue-500">
            <button
              className="cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
          </li>
          <li className="hover:text-blue-500">
            <button
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              About EduPath
            </button>
          </li>
          <li className="hover:text-blue-500">
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
            className="border border-gray-300 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-md"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-blue-500 hover:border hover:border-blue-500 hover:text-blue-500 hover:bg-white text-white py-2 rounded-lg px-3 flex items-center gap-3"
          >
            Get Started <span>→</span>
          </Link>
        </div>

        <button className="lg:hidden text-3xl" onClick={toggleMenu}>
          <Icon icon="mdi:menu" />
        </button>
      </nav>

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
          className="text-gray-700 hover:text-blue-500"
          onClick={() => scrollToSection("home")}
        >
          Home
        </button>
        <button
          className="text-gray-700 hover:text-blue-500"
          onClick={() => scrollToSection("about")}
        >
          About EduPath
        </button>
        <button
          className="text-gray-700 hover:text-blue-500"
          onClick={() => scrollToSection("contact")}
        >
          Contact Us
        </button>

        <Link
          to="/login"
          className="border border-gray-300 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-md"
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className="bg-blue-500 text-white hover:border hover:border-blue-500 hover:text-blue-500 hover:bg-white py-2 px-4 rounded-lg"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;
