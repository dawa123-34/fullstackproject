import React from "react";
import Sidebar from "../admin/components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      
      <div className="hidden md:block fixed top-0 left-0 h-screen w-64 bg-white shadow-md z-10">
        <Sidebar />
      </div>

       
      <div className="md:hidden fixed top-0 left-0 w-full z-10">
        <Sidebar />
      </div>

    
      <div className="flex-1 md:ml-64 pt-14 md:pt-0 overflow-y-auto bg-gray-50 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
