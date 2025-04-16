import React from 'react'
import { Link } from "react-router-dom";

const card = ({blog}) => {
  return (
    <div>
       <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          {blog.serviceName}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          <span className="font-semibold">Required Documents:</span><br />
          {blog.requiredDocuments}
        </p>
      </div>
      <Link to={`/singleService/${blog._id}`} className="block mt-6">
  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full">
    View
  </button>
</Link>
    </div>
  
    </div>
  )
}

export default card