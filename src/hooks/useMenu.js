import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const scroll = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    };

    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(scroll, 100); 
    } else {
      scroll();
    }
  };

  return { menuOpen, toggleMenu, scrollToSection };
};

export default useMenu;