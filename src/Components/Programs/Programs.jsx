import React from 'react'
import './Programs.css'
import { Prog } from '../index'
import { assets } from '../../assets/index'

const Programs = () => {




  





  return (
    <div className='programs fadeIn slideFromDown initial-slide-up' >
      <Prog image={assets.program1} hoverimage={assets.programIcon1} hoverfont="Graduation Degree" />
      <Prog image={assets.program2} hoverimage={assets.programIcon2} hoverfont="Master's Degree" />
      <Prog image={assets.program3} hoverimage={assets.programIcon3} hoverfont="Post Graduation" />
    </div>
  )
}

export default Programs