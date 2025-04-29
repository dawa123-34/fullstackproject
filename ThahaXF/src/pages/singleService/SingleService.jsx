import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  const fetchSingleService = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/services/service/${id}`);
      if (response.status === 200) {
        setService(response.data.service);
      }
    } catch (error) {
      console.error("Failed to fetch service", error);
    }
  };

  useEffect(() => {
    fetchSingleService();
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 p-6">
      <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-2xl border border-blue-200">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6 text-center">
          {service.serviceName}
        </h1>

        <div className="bg-blue-50 p-6 rounded-lg border-l-8 border-blue-600 shadow-inner">
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            <span className="font-semibold text-blue-700">Required Documents:</span><br />
            {service.requiredDocuments}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
