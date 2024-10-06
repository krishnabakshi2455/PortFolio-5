import React from 'react'
import './SkillsInfoCard.css'

interface props {
    heading: string
    skills: Array<any>
}
const SkillsInfoCard: React.FC<props> = ({ heading, skills }) => {
    return (
        <>
            <div className='skills-info-card'>
                <h6>{heading}</h6>

                <div className='skills-info-content'>
                    {
                        skills.map((item, index) => {
                            return (
                                <>
                                    <div key={`skills_${index}`}>

                                        <div className='skill-info'>
                                            <p>{item.skill}</p>
                                            <p className='percentage'>{item.percentage}</p>
                                        </div>

                                        <div className='skill-progress-bg'>
                                            <div className='skill-progress' style={{ width: item.percentage }}></div>
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}

export default SkillsInfoCard
