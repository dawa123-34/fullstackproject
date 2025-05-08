import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TotalServices from './components/TotalServices';

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
      <div className="flex-1 pl-6 pr-2 pt-6 pb-6"> {/* Less padding on the left */}
      <h1 className="text-4xl font-extrabold text-blue-900 bg-blue-100 px-4 py-2 rounded-md mb-6 text-center shadow">
  Admin Dashboard
</h1>

        <TotalServices/>
      </div>
    </div>
  );
};

export default Admin;
