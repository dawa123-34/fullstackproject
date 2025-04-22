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
      const response = await axios.post('http://localhost:3000/api/services/create', {
        serviceName,
        requiredDocuments,
      });

      // Show success alert message
      alert("Service created successfully!");

      // Clear form inputs
      setServiceName('');
      setRequiredDocuments('');

      // Navigate to show services page after a short delay
      setTimeout(() => {
        navigate('/admin/showServices');
      }, 1500); // Wait for the alert to be displayed

    } catch (error) {
      // Show error alert message
      alert("Failed to create service.");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-10 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Add New Service</h2>

        <div>
          <label htmlFor="serviceName" className="block text-gray-700 dark:text-gray-200 mb-1">
            Service Name
          </label>
          <input
            type="text"
            id="serviceName"
            name="serviceName"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            placeholder="e.g., Company Registration Service"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="requiredDocuments" className="block text-gray-700 dark:text-gray-200 mb-1">
            Required Documents
          </label>
          <textarea
            id="requiredDocuments"
            name="requiredDocuments"
            value={requiredDocuments}
            onChange={(e) => setRequiredDocuments(e.target.value)}
            placeholder="e.g., Business Plan, Citizenship Card, Tax Registration"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateServiseForm;
