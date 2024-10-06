import React from 'react'
import './SkillsCards.css'

interface props {
    isActive: boolean
    iconUrl: string
    title: string
    onclick: () => void
}

const SkillsCards: React.FC<props> = ({ isActive, iconUrl, title, onclick }) => {
    return (
        <>
            <div
                className={`skills-card ${isActive ? "active" : ""}`}
                onClick={() => onclick()}
            >
                <div className='skill-icon'>
                    <img src={iconUrl} alt={title} />
                </div>

                <span>{title}</span>

            </div>

        </>
    )
}

export default SkillsCards
