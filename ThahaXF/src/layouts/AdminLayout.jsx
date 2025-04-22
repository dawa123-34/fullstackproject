// src/layouts/AdminLayout.jsx
import React from "react";
import Sidebar from "../admin/components/Sidebar"; // adjust path if needed
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
