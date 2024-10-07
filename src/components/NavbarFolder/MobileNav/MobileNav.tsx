import React from 'react'
import './MobileNav.css'

interface props {
    isopen: boolean
    togglemenu: () => void; // assuming togglemenu is a function, adjust this as needed
}
const MobileNav: React.FC<props> = ({ isopen, togglemenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isopen ? "active" : ""}`} onClick={togglemenu}>

                <div className='mobile-menu-container'>
                    <p style={{marginBottom:'3rem',fontSize:'1.5rem',fontFamily:"sans-serif"}}>Portfolio</p>

                    <ul>
                        <li><a href='#home' className='menu-item'>Home</a></li>

                        <li><a href='#skills' className='menu-item'>Skills</a></li>

                        <li><a href='#myprojects' className='menu-item'>My Projects</a></li>

                        <li><a href='#contactme' className='menu-item'>Contact Me</a></li>

                        <button className='contact-btn' onClick={() => { }}>Hire Me</button>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default MobileNav
