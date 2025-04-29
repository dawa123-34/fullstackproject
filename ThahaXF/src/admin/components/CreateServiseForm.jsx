import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateServiseForm = () => {
  const [serviceName, setServiceName] = useState('');
  const [requiredDocuments, setRequiredDocuments] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/services/create`, {
        serviceName,
        requiredDocuments,
      });

      alert("Service created successfully!");

      setServiceName('');
      setRequiredDocuments('');

      setTimeout(() => {
        navigate('/admin/showServices');
      }, 1500);

    } catch (error) {
      alert("Failed to create service.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Add New Service</h2>
        <p className="text-sm text-center mb-6">Please fill in the service details.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700">
              Service Name
            </label>
            <input
              type="text"
              id="serviceName"
              name="serviceName"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder="e.g., Company Registration Service"
              className="w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="requiredDocuments" className="block text-sm font-medium text-gray-700">
              Required Documents
            </label>
            <textarea
              id="requiredDocuments"
              name="requiredDocuments"
              value={requiredDocuments}
              onChange={(e) => setRequiredDocuments(e.target.value)}
              placeholder="e.g., Business Plan, Citizenship Card, Tax Registration"
              rows="4"
              className="w-full p-3 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateServiseForm;
