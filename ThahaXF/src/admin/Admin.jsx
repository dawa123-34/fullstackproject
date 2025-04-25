import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ServicesTable from './components/ServicesTable';

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If there's no token, redirect to login page
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar with toggle prop */}
      <Sidebar isOpen={true} toggleSidebar={() => {}} />

      {/* Mobile Topbar with Hamburger */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between bg-white dark:bg-gray-800 border-b px-4 py-3 shadow">
        <button onClick={() => {}} className="text-gray-800 dark:text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>

        
      </div>
    </div>
  );
};

export default Admin;
