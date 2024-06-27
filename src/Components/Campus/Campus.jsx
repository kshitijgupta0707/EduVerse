import './Campus.css'
import React from 'react'
import { assets } from '../../assets/index'
const Campus = () => {
    return (
        <div className="campus">

        <div className='gallery slideFromLeft' >
            <img className='scaleImage' src={assets.gallery1} alt="" />
            <img className='scaleImage' src={assets.gallery2} alt="" />
            <img className='scaleImage' src={assets.gallery3} alt="" />
            <img className='scaleImage' src={assets.gallery4} alt="" />
        </div>
        <button className='btn dark-btn' >See More here <img src={assets.whiteArrow} alt="" />  </button>
        </div>
    )
}

export default Campus