import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import Emailimg from '../../assets/email-icon.webp'
import GithubImg from '../../assets/github.png'
import ContactForm from './ContactForm/ContactForm'
const ContactMe: React.FC = () => {
    return (
        <>
            <section className='contact-container' id='contactme'>
                <h5>Contact Me</h5>

                <div className='contact-content'>
                    <div style={{ flex: "1" }}>
                        <ContactInfoCard iconurl={Emailimg} text='krishnabakshi2455@gmail.com'/>
                        <ContactInfoCard iconurl={GithubImg} text='https://github.com/krishnabakshi2455' />
                    </div>
                    <div style={{ flex: "1" }}>
                        <ContactForm/>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactMe