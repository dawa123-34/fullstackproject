import React from 'react'
import Navbar from '../globals/components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../globals/components/footer/Footer'

const PublicLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default PublicLayout