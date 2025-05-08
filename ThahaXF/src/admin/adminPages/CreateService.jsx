import React from 'react'
import CreateServiseForm from '../components/CreateServiseForm'

const CreateService = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 flex flex-col">
      <h1 className="text-4xl font-extrabold text-blue-900 bg-blue-100 px-4 py-2 rounded-md mb-6 text-center shadow">
        ADD SERVICE
      </h1>
      <div className="flex-1 bg-white shadow-md rounded-lg p-4">
        <CreateServiseForm />
      </div>
    </div>
  )
}

export default CreateService
