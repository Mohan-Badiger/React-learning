import React from 'react'
import Home from './pages/Home'
import {Routes, Route } from 'react-router-dom'
import Login from './components/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/service' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
