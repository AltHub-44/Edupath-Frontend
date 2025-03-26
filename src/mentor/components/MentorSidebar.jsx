
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

const MentorSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const navItems = [
    { path: '/mentor-dashboard', label: 'Dashboard', icon: 'tabler:dashboard' },
    { path: '/mentor-dashboard/mentees', label: 'My Mentees', icon: 'tabler:users' },
    { path: '/mentor-dashboard/assignments', label: 'Assignments', icon: 'tabler:clipboard-text' },
    { path: '/mentor-dashboard/schedule', label: 'Schedule', icon: 'tabler:calendar' },
    { path: '/mentor-dashboard/resources', label: 'Resources', icon: 'tabler:book' },
    { path: '/mentor-dashboard/profile', label: 'Profile', icon: 'tabler:user-circle' },
    { path: '/mentor-dashboard/settings', label: 'Settings', icon: 'tabler:settings' },
  ];
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && window.innerWidth < 768 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      {/* <aside 
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-purple-600 to-purple-800 shadow-lg z-20 transition-all duration-300 ${
          isOpen ? "w-64" : "w-0 -translate-x-full md:translate-x-0 md:w-20"
        }`}
      > */}
      <aside className="hidden lg:block min-h-screen bg-gradient-to-b from-purple-600 to-purple-800 shadow-lg z-20 flex-shrink-0 transition-all duration-300">
        <div className="flex justify-between items-center p-4 border-b border-purple-500">
          {isOpen ? (
            <h1 className="font-bold text-xl text-white">Mentor Portal</h1>
          ) : (
            <h1 className="font-bold text-xl text-white hidden md:block">MP</h1>
          )}
          <button 
            onClick={toggleSidebar}
            className="p-1 rounded-full hover:bg-purple-500 text-white"
          >
            <Icon 
              icon={isOpen ? "tabler:chevron-left" : "tabler:chevron-right"} 
              className="h-5 w-5" 
            />
          </button>
        </div>
        
        <div className="px-4 py-6">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center text-purple-700 font-bold mr-3">
              {isOpen ? "MB" : "M"}
            </div>
            {isOpen && (
              <div>
                <h3 className="font-medium text-white">Michelle Brown</h3>
                <p className="text-xs text-purple-200">Senior Mentor</p>
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
                  className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-white text-purple-700 font-medium" 
                        : "text-white hover:bg-purple-500"
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
        className="fixed top-4 left-4 z-30 md:hidden bg-purple-600 p-2 rounded-lg shadow-md text-white"
        onClick={toggleSidebar}
      >
        <Icon icon={isOpen ? "tabler:x" : "tabler:menu-2"} className="h-5 w-5" />
      </button>
    </>
  );
};

export default MentorSidebar;
