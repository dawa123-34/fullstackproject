import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TotalServices = () => {
  const [totalServices, setTotalServices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTotalServices = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/services/service/total/count`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token if needed
          }
        });
        setTotalServices(response.data.total);
        setLoading(false);
      } catch (err) {
        setError("Failed to load total services.");
        setLoading(false);
      }
    };

    fetchTotalServices();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold">Total Services</h2>
      <p className="text-2xl font-bold text-blue-600">{totalServices}</p>
    </div>
  );
};

export default TotalServices;
