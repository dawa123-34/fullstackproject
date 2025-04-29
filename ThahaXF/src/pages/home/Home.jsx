import React, { useEffect, useState } from "react";
import Card from "./components/card"; // Correct path
import axios from "axios";
import SearchBar from "./components/SearchBar"; // Import the SearchBar component

const Home = () => {
  const [services, setServices] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message

  // Function to fetch services
  const fetchServices = async (keyword = "") => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/services/service/search?keyword=${keyword}`);
      if (response.data.services.length === 0) {
        setErrorMessage("No services found matching your search"); // Set error message if no services found
      } else {
        setErrorMessage(""); // Clear error message if services are found
      }
      setServices(response.data.services); // Update the services state
    } catch (error) {
      console.error("Error fetching services:", error);
      setErrorMessage("Error fetching services. Please try again later."); // Set a general error message
    }
  };

  useEffect(() => {
    fetchServices(); // Load all services on initial render
  }, []);

  const handleSearch = (keyword) => {
    setErrorMessage(""); // Clear previous error message on new search
    fetchServices(keyword); // Fetch services based on the search keyword
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-10">
            Available Services
          </h1>
          
          {/* Include the SearchBar component */}
          <SearchBar onSearch={handleSearch} />

          {/* Display error message if no services found */}
          {errorMessage && (
            <div className="text-center text-red-500 mb-4">
              {errorMessage}
            </div>
          )}

          {/* Display the services in grid format */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service._id} blog={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
