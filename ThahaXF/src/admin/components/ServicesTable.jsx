import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ServicesTable = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  // Fetch services from the backend
  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/services/service');
      setServices(response.data.services);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  // Fetch services when the component mounts
  useEffect(() => {
    fetchServices();
  }, []);

  // Format date to a readable format
  const formatDate = (date) => new Date(date).toLocaleDateString();

  // Navigate to update page
  const handleUpdate = (id) => {
    navigate(`/admin/updateService/${id}`);
  };

  // Handle delete service
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this service?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/api/services/service/${id}`);
      setServices(services.filter(service => service._id !== id)); // Update the list without reloading the page
      alert("Service deleted successfully.");
    } catch (error) {
      console.error("Error deleting service:", error);
      alert("Failed to delete service.");
    }
  };

  return (
    <div className="min-w-full overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="text-left p-3 px-5">Service Name</th>
            <th className="text-left p-3 px-5">Created Date</th>
            <th className="text-left p-3 px-5">Updated Date</th>
            <th className="text-right p-3 px-5">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr
              key={service._id}
              className={`border-b hover:bg-orange-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
            >
              <td className="p-3 px-5">{service.serviceName}</td>
              <td className="p-3 px-5">{formatDate(service.createdAt)}</td>
              <td className="p-3 px-5">{formatDate(service.updatedAt)}</td>
              <td className="p-3 px-5 flex justify-end space-x-2">
                <button
                  onClick={() => handleUpdate(service._id)}
                  className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {services.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-6 text-gray-500">
                No services available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
