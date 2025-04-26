import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/admin" },
    { name: "Show Services", href: "/admin/showServices" },
    { name: "Add Service", href: "/admin/createService" },
    { name: "Register", href: "/registerAdmin" },
  ];

  return (
    <>
      <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 py-3">
      <span className="text-lg font-bold text-gray-900 dark:text-white">ThahaX</span>
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-800 dark:text-white focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    {/* Sidebar */}
    <aside
      className={`bg-[#152238] w-64 p-6 ${
        isOpen ? "block" : "hidden"
      } md:block fixed md:static inset-y-0 left-0 z-50 md:z-0`}
    >
      {/* Logo */}
      <div className="hidden md:flex items-center mb-8">
        <span className="text-2xl font-bold text-white">ThahaX</span>
      </div>

      {/* Navigation */}
      <ul className="space-y-4">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link
              to={item.href}
              className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
                location.pathname === item.href
                  ? "bg-[#0f172a] text-white"
                  : "text-white hover:bg-[#1e293b]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>

    {/* Mobile backdrop */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        onClick={() => setIsOpen(false)}
      ></div>
    )}
    </>
  );
};

export default Sidebar;
