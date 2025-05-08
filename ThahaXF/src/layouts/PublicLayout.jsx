import React from 'react'
import Navbar from '../globals/components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../globals/components/footer/Footer'
import Header from '../globals/components/header/Header'

const PublicLayout = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default PublicLayout