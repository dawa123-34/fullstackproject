import React from 'react';
import ServicesTable from '../components/ServicesTable';

const ShowServices = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 flex flex-col">
      {/* Wrapper for the table, making it scrollable and filling the space */}
      <div className="flex-1 overflow-x-auto bg-white shadow-md rounded-lg">
        <ServicesTable />
      </div>
    </div>
  );
};

export default ShowServices;
