import React, { useState } from 'react'
import './Skills.css'
import { SKILLSDATA } from '../../utils/data'
import SkillsCards from './SkillsCards/SkillsCards'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'
const Skills:React.FC = () => {
    const [selectedskill, setselectedskill] = useState(SKILLSDATA[0])

    const handleSelectSkill =(data:any)=>{
        setselectedskill(data)
    }

    return (
        <>
            <section className='skills-container' id='skills'>
                <h2>Technical Proficiency</h2>

                <div className='skills-content'>

                    <div className='skills'>
                        {
                            SKILLSDATA.map((item) => {
                                return(
                                    <SkillsCards
                                        key={item.title}
                                        title={item.title}
                                        iconUrl={item.icon}
                                        isActive={selectedskill.title=== item.title}
                                        onclick={()=>{
                                            handleSelectSkill(item)
                                        }}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className='skills-info'>
                        <SkillsInfoCard heading={selectedskill.title} skills={selectedskill.skills}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Skills
