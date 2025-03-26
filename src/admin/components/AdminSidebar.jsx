import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { path: "/admin-dashboard", label: "Dashboard", icon: "tabler:dashboard" },
    { path: "/admin-dashboard/users", label: "Users", icon: "tabler:users" },
    { path: "/admin-dashboard/courses", label: "Courses", icon: "tabler:book" },
    {
      path: "/admin-dashboard/mentors",
      label: "Mentors",
      icon: "tabler:user-check",
    },
    {
      path: "/admin-dashboard/reports",
      label: "Reports",
      icon: "tabler:chart-bar",
    },
    {
      path: "/admin-dashboard/settings",
      label: "Settings",
      icon: "tabler:settings",
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && window.innerWidth < 768 && (
        <div
          className="hidden md:fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside className="hidden lg:block min-h-screen  bg-blue300 shadow-lg z-20 flex-shrink-0 transition-all duration-300">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          {isOpen ? (
            <h1 className="font-bold text-xl text-white">Admin Portal</h1>
          ) : (
            <h1 className="font-bold text-xl text-white hidden md:block">AP</h1>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-full hover:bg-gray-700 text-white"
          >
            <Icon
              icon={isOpen ? "tabler:chevron-left" : "tabler:chevron-right"}
              className="h-5 w-5"
            />
          </button>
        </div>

        <div className="px-4 py-6">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
              {isOpen ? "AJ" : "A"}
            </div>
            {isOpen && (
              <div>
                <h3 className="font-medium text-white">Alex Johnson</h3>
                <p className="text-xs text-gray-400">System Administrator</p>
              </div>
            )}
          </div>
        </div>

        <nav className="mt-2 px-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-gray-700 text-white font-medium"
                        : "text-gray-300 hover:bg-gray-700"
                    }`
                  }
                >
                  <Icon icon={item.icon} className="h-5 w-5" />
                  {isOpen && <span className="ml-3">{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Toggle button for mobile */}
      <button
        className="fixed top-4 left-4 z-30 md:hidden bg-gray-800 p-2 rounded-lg shadow-md text-white"
        onClick={toggleSidebar}
      >
        <Icon
          icon={isOpen ? "tabler:x" : "tabler:menu-2"}
          className="h-5 w-5"
        />
      </button>
    </>
  );
};

export default AdminSidebar;
