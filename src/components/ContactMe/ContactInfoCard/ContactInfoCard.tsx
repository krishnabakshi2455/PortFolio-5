import React from 'react'
import './ContactInfoCard.css'

interface props {
    text: string
    iconurl: string
}
const ContactInfoCard: React.FC<props> = ({ text, iconurl }) => {
    return (
        <>
            <div className='contact-details-card'>
                <div className='icon'>
                    <img src={iconurl} alt={text} />
                </div>

                <p>{text}</p>

            </div>
        </>
    )
}

export default ContactInfoCard