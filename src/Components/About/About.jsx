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

                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum veniam nostrum suscipit dolores aliquam aperiam fugit maxime iusto autem esse architecto sequi repellat quos, eum labore, dolore blanditiis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere atque nobis a pariatur, repellat quia nemo dolorem quos, sint veritatis harum doloremque recusandae eveniet possimus!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi repudiandae ad, dolorem at blanditiis soluta laboriosam asperiores libero earum consequuntur ratione iure dolorum ipsum fugiat labore excepturi odio quo voluptate nihil, laudantium expedita.</p>
            </div>

        </div>
    )
}

export default About