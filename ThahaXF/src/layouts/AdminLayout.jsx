import React from "react";
import Sidebar from "../admin/components/Sidebar"; 
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen"> 
      <Sidebar /> 
      <div className="flex-1 ml-0 md:ml-64 p-6 bg-gray-50"> 
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
