import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const navItems = [
    { to: "/dashboard", icon: "ic:round-dashboard", label: "Dashboard" },
    { to: "/dashboard/mentor", icon: "hugeicons:mentoring", label: "Mentor" },
    {
      to: "/dashboard/path",
      icon: "majesticons:map-marker-path-line",
      label: "Your Path",
    },
    { to: "/dashboard/mentra", icon: "majesticons:chat-line", label: "Mentra" },
  ];

  const secondaryNavItems = [
    { icon: "streamline:target", label: "Goals", to: "/dashboard/goals" },
    { icon: "ep:files", label: "Resources", to: "/dashboard/resources" },
    { icon: "hugeicons:quiz-03", label: "Quizzes", to: "/dashboard/quiz" },
    {
      icon: "mynaui:notification-solid",
      label: "Notifications",
      to: "/dashboard/notifications",
    },
    { icon: "solar:user-linear", label: "Profile", to: "/dashboard" },
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
        className={`fixed  top-0 right-0 h-screen w-64 bg-blue-600 text-white p-6 transform transition-transform duration-300 z-50
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

        <div className="mb-4 mt-5">
          <p className="text-white/60 text-xs font-medium  mb-2">
            MAIN NAVIGATION
          </p>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`
                      flex items-center gap-3 py-3 text-white rounded-lg transition-colors", 
                      ${
                        location.pathname === item.to
                          ? "bg-white/20 font-medium px-3"
                          : "hover:bg-white/10 hover:px-3"
                      }`}
                >
                  <Icon icon={item.icon} className="h-5 w-auto" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <p className="text-white/60 text-xs font-medium mb-2">
            OTHER LINKS
          </p>
          <ul className="flex flex-col gap-3 mt-3">
            {secondaryNavItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`flex items-center gap-3 py-2.5 text-white/80 rounded-lg transition-colors", 
                      ${
                        location.pathname === item.to
                          ? "bg-white/20 font-medium"
                          : "hover:bg-white/10"
                      }`}
                >
                  <Icon icon={item.icon} className="h-5 w-auto" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={logout}
          to="/"
          className="flex items-center gap-3 text-lg mt-8 hover:bg-white100 hover:text-black py-3 rounded-lg transition"
        >
          <Icon icon="ri:logout-circle-line" className="text-2xl" />
          Log out
        </button>
      </nav>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
