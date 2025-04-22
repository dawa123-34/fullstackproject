import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Top Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50 flex items-center justify-between px-4 py-3">
        <button
          onClick={toggleSidebar}
          className="text-gray-800 dark:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`w-64 h-screen bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 fixed top-0 left-0 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="h-full p-4 overflow-y-auto pt-16 md:pt-4">
          <div className="flex items-center mb-6">
            <span className="text-xl font-bold text-gray-900 dark:text-white">ThahaX</span>
          </div>

          {/* Sidebar Links */}
          <ul className="space-y-2">
            <li>
              <Link to="/admin" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/showServices" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                Show Services
              </Link>
            </li>
            <li>
              <Link to="/admin/createService" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                Add Service
              </Link>
            </li>
            <li>
              <Link to="/register" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
