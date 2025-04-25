import ThahaXLogo from '../../../assets/TX-logo.png'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-8 shadow-lg">
      <div className="container mx-auto flex items-center justify-center">
        <div className="absolute left-6 flex items-center">
          <img 
            src={ThahaXLogo}
            alt="ThahaX Logo"
            className="w-24 h-24 rounded-full border-6 border-white shadow-xl"
          />
        </div>
        <div className="text-center">
          <h1 className="text-6xl font-extrabold tracking-wide text-white mb-2">
            ThahaX
          </h1>
          <p className="text-xl italic text-gray-200 opacity-90">
            Your gateway to government services
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
