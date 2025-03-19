import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Close sidebar when window resizes above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 min-h-screen bg-gray-100 lg:pl-6">
        <Header toggleSidebar={toggleSidebar} />
        <main className=""><Outlet /></main>
      </div>
    </div>
  );
};

export default DashboardLayout;