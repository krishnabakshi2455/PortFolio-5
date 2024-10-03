import React from 'react'
import './Home.css'
import ReactIcon from "../../assets/react-icon.png"
import MainImg from '../../assets/mainimg.jpg'
import HtmlIcon from '../../assets/html-icon.png'
import CssIcon from '../../assets/css-icon.png'
import JavaScript from '../../assets/javascript-icon.png'
import Typescript from '../../assets/typescript-icon.png'
const Home = () => {
  return (
    <>
     <section className='hero-container'>
        <div className='hero-content'>
          <h2>Building Digital Experience That Inspire</h2>
          <p>Passionate Frontend Developer | Transforming Ideas Into Seamless And Visually Stunning Web Solutions</p>
        </div>

        <div className='hero-img'>
          <div>
            <div className='tech-icon'>
              <img src={ReactIcon} alt="noicon" />
            </div>

            <img src={MainImg} alt="noimage" />
          </div>

          <div>
            <div className='tech-icon'>
              <img src={HtmlIcon} alt="nothing-tech-icon" />
            </div>

            <div className='tech-icon'>
              <img src={CssIcon} alt="nothing-tech-icon" />
            </div>

            <div className='tech-icon'>
              <img src={JavaScript} alt="nothing-tech-icon" />
            </div>

            <div className='tech-icon'>
              <img src={Typescript} alt="nothing-tech-icon" />
            </div>
          </div>

        </div>


     </section>
    </>
  )
}

export default Home
