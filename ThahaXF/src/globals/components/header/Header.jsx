import ThahaXLogo from '../../../assets/TX-logo.png'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-6 md:py-8 shadow-lg relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center relative px-4">
        
        {/* Logo */}
        <div className="mb-4 md:mb-0 md:absolute md:left-6 flex items-center">
          <img 
            src={ThahaXLogo}
            alt="ThahaX Logo"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 md:border-6 border-white shadow-xl"
          />
        </div>

        {/* Title and Tagline */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-white mb-2">
            ThahaX
          </h1>
          <p className="text-lg md:text-xl italic text-gray-200 opacity-90">
            Your gateway to government services
          </p>
        </div>
        
      </div>
    </header>
  )
}

export default Header
