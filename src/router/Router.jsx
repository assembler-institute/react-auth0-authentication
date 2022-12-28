import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from '../pages/Login/SignIn'
import Home from '../pages/Home/Home'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
