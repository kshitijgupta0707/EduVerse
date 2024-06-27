import React from 'react'
import './Programs.css'
const Prog = ( {image , hoverfont , hoverimage}) => {
  return (
    <div className='program' >
         <img src={image} alt="dfdfd" />
         <div className="caption">
          <p>{hoverfont}</p>
          <img src={hoverimage} alt="" />
            
         </div>
    </div>
  )
}

export default Prog