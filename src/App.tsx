import { useState } from 'react'
import Navbar from './components/NavbarFolder/Navbar'
import Home from './components/HomeFolder/Home'
import './App.css'
function App() {

  return (
    <>
      <Navbar/>
      <div className='container'>
        <Home />
      </div>
    </>
  )
}

export default App
