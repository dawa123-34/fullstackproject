// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    onSearch(keyword); // Pass the keyword to the parent (Home component)
  };

  return (
    <div className="mb-8 flex justify-center">
      <input
        type="text"
        value={keyword}
        onChange={handleInputChange}
        placeholder="Search for services..."
        className="border rounded-md p-2 w-1/3"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-600 text-white rounded-md p-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
