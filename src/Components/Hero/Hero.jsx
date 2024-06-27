import React, { useEffect } from 'react'
import './Hero.css'
import { assets } from '../../assets/index'
import Typed from 'typed.js'


const Hero = () => {

    const Role = () => {
        return (
            <span className="role"></span>
        );
    };
    useEffect(() => {
        // Target the element with class '.role'
        const typeData = new Typed('.role', {
            strings: [''],
            typeSpeed: 80,
            backSpeed: 80,
            loop: true,
            // smartBackspace: true,
            showCursor: true,
            cursorChar: '!', // Change cursor character
        });

        // Clean up on component unmount
        return () => {
            typeData.destroy();
        };
    }, []);
    return (
        <div className='container hero fadeIn  '  >

            <div className="hero-text slideFromRight ">
                <h1>We Ensure better education for a better world  &nbsp;
                    <Role />
                </h1>
                <p>Our cutting-edge currriculum is desgined to empower students with the knowledge , skills and
                    experiences needed to exceil in the dynamic field of education
                </p>
                <button className='btn exploreBtn' >Explore more  <img className='darkArrow' src={assets.darkArrow} alt="" />  </button>
            </div>

        </div>
    )
}



export default Hero