import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import router from '../routes'
import Footer from './globals/components/footer/Footer'
import Navbar from './globals/components/navbar/Navbar'
import Header from './globals/components/header/Header'

const App = () => {
  return (
    <>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
    
   
    </>
  )
}

export default App