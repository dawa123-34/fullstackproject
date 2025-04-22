import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import router from '../routes'
import Footer from './globals/components/footer/Footer'
import Navbar from './globals/components/navbar/Navbar'

const App = () => {
  return (
    <>
    
    <RouterProvider router={router}/>
    
   
    </>
  )
}

export default App