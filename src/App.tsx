import Navbar from './components/NavbarFolder/Navbar'
import Home from './components/HomeFolder/Home'
import './App.css'
import Skills from './components/Skills/Skills'
import Projects from './ProjectsFolder/Projects'
function App() {

  return (
    <>
      <Navbar/>
      <div className='container'>
        <Home />
        <Skills/>
        <Projects/>
      </div>
    </>
  )
}

export default App
