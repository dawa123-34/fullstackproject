import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleService = () => {

  const {id} = useParams()
  const [service,setService] =useState({})
  const fetchSingleService =async()=>{
    const response = await axios.get("http://localhost:3000/api/services/service/"+ id)
    console.log(response)
    if(response.status ==200){
      setService(response.data.service)
    }
  }
  useEffect(()=>{
    fetchSingleService()

  },[])
  console.log(service,"service")

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-xl border border-blue-100 max-w-xl mx-auto my-6">
    <h1 className="text-4xl font-extrabold text-blue-800 mb-3 tracking-tight">
      {service.serviceName}
    </h1>
    
    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
      <p className="text-gray-700 text-base leading-relaxed">
        <span className="font-semibold text-blue-600">Required Documents:</span><br />
        {service.requiredDocuments}
      </p>
    </div>
  </div>
  
  )
}

export default SingleService