import React from 'react'
import './Home.css'
import ReactIcon from "../../assets/react-icon.png"
import MainImg from '../../assets/mainimg.jpg'
import HtmlIcon from '../../assets/html-icon.png'
import CssIcon from '../../assets/css-icon.png'
import JavaScript from '../../assets/javascript-icon.png'
import Typescript from '../../assets/typescript-icon.png'
import NodejsImg from '../../assets/node-js.png'
import ExpressjsImg from '../../assets/express-js.png'
import MongoDBImg from '../../assets/mongo-db.png'
import AWSimg from '../../assets/aws-logo.png'
const Home = () => {
  return (
    <>
     <section className='hero-container' id="home">
        <div className='hero-content'>
          <h2>Building Digital Experience That Inspire</h2>
          <p>Passionate FullStack Developer | Transforming Ideas Into Seamless And Visually Stunning Web Solutions</p>
        </div>

        <div className='hero-img'>
          <div>

           <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
              <div className='tech-icon'>
                <img src={HtmlIcon} alt="nothing-tech-icon" />
              </div>

              <div className='tech-icon'>
                <img src={CssIcon} alt="nothing-tech-icon" />
              </div>

              <div className='tech-icon'>
                <img src={ReactIcon} alt="noicon" />
              </div>

              <div className='tech-icon'>
                <img src={JavaScript} alt="nothing-tech-icon" />
              </div>

              <div className='tech-icon'>
                <img src={Typescript} alt="nothing-tech-icon" />
              </div>
           </div>


            <img src={MainImg} alt="noimage" />
          </div>

          <div>
            <div className='tech-icon'>
              <img src={NodejsImg} alt="nothing-tech-icon" />
            </div>

            <div className='tech-icon'>
              <img src={ExpressjsImg} alt="nothing-tech-icon" />
            </div>

            <div className='tech-icon'>
              <img src={MongoDBImg} alt="nothing-tech-icon" />
            </div>

            <div className='tech-icon'>
              <img src={AWSimg} alt="nothing-tech-icon" />
            </div>
          </div>

        </div>


     </section>
    </>
  )
}

export default Home
