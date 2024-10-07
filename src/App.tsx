import Navbar from './components/NavbarFolder/Navbar'
import Home from './components/HomeFolder/Home'
import './App.css'
import Skills from './components/Skills/Skills'
import Projects from './components/ProjectsFolder/Projects'
import ContactMe from './components/ContactMe/ContactMe'
function App() {

  return (
    <>
      <Navbar/>
      <div className='container'>
        <Home />
        <Skills/>
        <Projects/>
        <ContactMe/>
      </div>
    </>
  )
}

export default App
