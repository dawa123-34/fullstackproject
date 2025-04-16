import React, { useEffect, useState } from "react";
import Card from "./components/card"; // Correct path and case
import axios from "axios";  // Correct the typo here

const Home = () => {
  const [services,setServices] =useState([])

  const fetchService = async () => {
    const response = await axios.get('http://localhost:3000/api/services/service');
    setServices(response.data.services);
  };

  useEffect(() => {
    fetchService();
  }, []);
  console.log(services,"services")

  return (
    <>
     <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-16">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-10">
      Available Services
    </h1>
    
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((blog) => (
        <Card key={blog._id} blog={blog} />
      ))}
    </div>
  </div>
</div>
      

    </>
  );
};

export default Home;
