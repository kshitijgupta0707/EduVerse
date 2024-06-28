import React from 'react'
import './Title.css'
const Title = ({ subtitle, title }) => {
    return (
        <div className='title'  >

            <p className='first-title'>
                {subtitle}
            </p>
            <h2 className='second-title' >
                {title}
            </h2>

        </div>
    )
}

export default Title