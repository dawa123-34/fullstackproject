import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import router from '../routes'

const App = () => {
  return (
    <>
   
    <RouterProvider router={router}/>
    
    
   
    </>
  )
}

export default App