import React from 'react';
import ServicesTable from '../components/ServicesTable';

const ShowServices = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 flex flex-col">
      <h2 className="text-4xl font-extrabold text-blue-900 bg-blue-100 px-4 py-2 rounded-md mb-6 text-center shadow">
  Services
</h2>

      <div className="flex-1 overflow-x-auto bg-white shadow-md rounded-lg">
        <ServicesTable />
      </div>
    </div>
  );
};

export default ShowServices;
