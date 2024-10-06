import { useState } from 'react'
import Navbar from './components/NavbarFolder/Navbar'
import Home from './components/HomeFolder/Home'
import './App.css'
import Skills from './components/Skills/Skills'
function App() {

  return (
    <>
      <Navbar/>
      <div className='container'>
        <Home />
        <Skills/>
      </div>
    </>
  )
}

export default App
