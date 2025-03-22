import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const navItems = [
    { to: "/dashboard", icon: "ic:round-dashboard", label: "Dashboard" },
    { to: "/dashboard/mentor", icon: "hugeicons:mentoring", label: "Mentor" },
    {
      to: "/dashboard/path",
      icon: "majesticons:map-marker-path-line",
      label: "Your Path",
    },
    { to: "/dashboard/mentra", icon: "majesticons:chat-line", label: "Mentra" },
    { to: "/dashboard/settings", icon: "mdi:cog-outline", label: "Settings" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 z-40 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      <nav
        className={`fixed top-0 right-0 h-screen w-64 bg-blue-600 text-white p-6 transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:translate-x-0 md:relative md:flex md:flex-col md:w-64  md:left-0`}
      >
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition md:hidden"
          onClick={toggleSidebar}
        >
          <Icon icon="mdi:close" className="text-2xl" />
        </button>

        <h1 className="text-2xl font-bold mb-8 mt-6">EDUPATH</h1>

        <ul className="flex flex-col gap-10 mt-20">
          {navItems.map(({ to, icon, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={toggleSidebar}
                className={`flex items-center gap-3 text-lg p-3 rounded-lg transition ${
                  location.pathname === to
                    ? "bg-white text-black"
                    : "hover:bg-white100 hover:text-black"
                }`}
              >
                <Icon icon={icon} className="text-2xl" />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          className="flex items-center gap-3 text-lg mt-32 hover:bg-white100 hover:text-black p-3 rounded-lg transition"
        >
          <Icon icon="ri:logout-circle-line" className="text-2xl" />
          Log out
        </Link>
      </nav>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
