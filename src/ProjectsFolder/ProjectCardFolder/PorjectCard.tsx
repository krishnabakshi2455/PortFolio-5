import React from 'react'
import './ProjectCard.css'


interface props {
    details: any
}
const PorjectCard: React.FC<props> = ({ details }) => {
    return (
        <>
            <div className='projectcard'>
                {/* <h6>{details.title}</h6> */}
                <img className='project-img' src={details.image} alt="nothing-image" />

                <div >
                    <p className='project-title'>{details.title}</p>
                </div>

                <div className='project-livlink '>
                    <p>LiveLink:</p>
                    <a href='/'>{details.LiveLink}</a>
                </div>

                <div className='project-description'>
                    <p>{details.description}</p>
                </div>


            </div>
        </>
    )
}

export default PorjectCard
