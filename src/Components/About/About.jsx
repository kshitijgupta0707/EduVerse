import React from 'react'
import './About.css'
import { assets } from '../../assets/index'
const About = ({setPlayState}) => {
    return (
        <div className='about slideFromRight' >
            <div className="about-left">
                <img className='aboutImage'  src={assets.about} alt="" />
                <img onClick={()=>{
                    setPlayState(true);
                }}  className='playImage' src={assets.play} alt="" />
            </div>
            <div className="about-right">

                <h3>ABOUT JIIT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>JIIT’s state-of-the-art, environmentally conditioned campus comprises smart buildings with Wi-Fi connectivity covering the Academic Block, Business School cum Research Block, Faculty Residences, Student Hostels and Annapurna.</p>
                <p>JIIT has been constantly ranked amongst the top engineering Institutes in Delhi NCR. Recently it has been ranked among top Engineering Institutes in India by Edu Rand 2014 Engineering College Rankings.</p>
                <p>Our mission is to become a Center of Excellence in the field of IT & related emerging areas education, training and research comparable to the best in the world for producing professionals who shall be leaders in innovation, entrepreneurship, creativity and management.</p>
            </div>

        </div>
    )
}

export default About