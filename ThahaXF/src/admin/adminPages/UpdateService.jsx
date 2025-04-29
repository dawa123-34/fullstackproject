import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [serviceName, setServiceName] = useState("");
  const [requiredDocuments, setRequiredDocuments] = useState("");

  // Fetch service by ID
  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/services/service/${id}`);
        setServiceName(res.data.service.serviceName);
        setRequiredDocuments(res.data.service.requiredDocuments);
      } catch (err) {
        console.error("Failed to fetch service", err);
      }
    };
    fetchService();
  }, [id]);

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/services/service/${id}`, {
        serviceName,
        requiredDocuments,
      });
      alert("Service updated successfully.");
      navigate("/admin/showServices");
    } catch (err) {
      console.error("Failed to update service", err);
      alert("Failed to update service.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Update Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Service Name</label>
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Required Documents</label>
          <textarea
            value={requiredDocuments}
            onChange={(e) => setRequiredDocuments(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            rows="4"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
