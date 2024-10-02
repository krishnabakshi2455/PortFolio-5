import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import MobileNav from './MobileNav/MobileNav';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {

  const [openMenu, setopenMenu] = useState(false)

  const toggleMenu = () => {
    setopenMenu(!openMenu)
  }


  return (
    <>
      <MobileNav isopen={openMenu} togglemenu={toggleMenu} />

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          {/* <img className='logo' src={Logo1} alt="nothing now" /> */}
          <p className='logo'>Portfolio</p>

          <ul >
            <li><a className='menu-item'>Home</a></li>

            <li><a className='menu-item'>Skills</a></li>

            <li><a className='menu-item'>My Projects</a></li>

            <li><a className='menu-item'>Contact Me</a></li>

            <button className='contact-btn' onClick={() => { }}>Hire Me</button>
          </ul>

          <button className='menu-btn' onClick={toggleMenu} type='button'><span
            className={"material-symbols-outlined"}
            style={{ fontSize: "1.8rem" }}
          >{
              openMenu ? <CloseIcon /> : <MenuIcon />
            } </span></button>
        </div>
      </nav>
    </>
  )
}

export default Navbar