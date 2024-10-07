import React, { useRef } from 'react'
import './Projects.css'
import { ProjectsData } from '../../utils/data'
import PorjectCard from './ProjectCardFolder/PorjectCard'
import Slider from "react-slick";
const Projects: React.FC = () => {

    const sliderref = useRef()


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:false,
        arrows: true,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }]
    }
    return (
        <>
            <section className='projects-container' id='myprojects'>
                <h5>My Projects</h5>

                <div className='projects-content'>
                    <Slider ref={sliderref} {...settings}>
                    {
                        ProjectsData.map((project) => {
                            return (
                                <PorjectCard key={project.title} details={project} />
                            )
                        })
                    }
                    </Slider>
                    
                </div>
            </section>
        </>
    )
}

export default Projects
