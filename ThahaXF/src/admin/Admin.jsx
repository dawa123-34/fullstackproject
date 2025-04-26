import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 pl-6 pr-2 pt-6 pb-6"> {/* Less padding on the left */}
        <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
      </div>
    </div>
  );
};

export default Admin;
