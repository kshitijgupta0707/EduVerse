import React, { useEffect, useRef, useState } from 'react'
import "./NavBar.css"
import { assets } from '../../assets/index'
import { Link, animateScroll as scroll , Events } from "react-scroll";
import { MdDarkMode } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { MdLightMode } from "react-icons/md";
import { useNavBarContext } from '../../Context/NavBarContextProvider';
import { RiCloseLine } from "react-icons/ri";

const NavBar = () => {
    const { darkMode, themeSwitcher, navbar, sideBar, sticky, setSticky, hidden, setHidden, hideSideBar, hideOrShowSideBar, handleResize , activeSection , setActiveSection, handleSetActive , sections} = useNavBarContext();
  

   
   


    return (

        <nav ref={navbar} className={`container ${sticky ? "dark-nav" : ""}`} >
            <div className="navigate">
                {['home', 'programs', 'about', 'campus', 'testimonials', 'contact'].map((section) => (
                    <li key={section}>
                        <Link
                            to={section}
                            smooth={true}
                            duration={500}
                            offset={section === 'home' || section === 'contact' ? 0 : -170}
                            onSetActive={() => { handleSetActive(section) }}
                        >
                            <span className={activeSection === section ? "navigate-dark": ""} >
                             <GoDotFill /> 
                            </span>
                        </Link>
                    </li>
                ))}
            </div>
            <div className='themeSwitcher' onClick={themeSwitcher} >{darkMode ? <MdDarkMode /> : <MdLightMode />} </div>

            <img className='logo' src={assets.logo} alt="" />

            <ul ref={sideBar} id='sideBar' >
                <li className='nav-items' >
                    <Link to="home" smooth={true} duration={500}  className={activeSection === 'home' ? 'active-link' : ''} offset={0}>
                        Home
                    </Link>
                </li>
                <li className='nav-items' >
                    <Link to="programs" smooth={true} duration={500}  className={activeSection === 'programs' ? 'active-link' : ''} offset={-170} >
                        Programs
                    </Link>
                </li>
                <li className='nav-items' >
                    <Link to="about" smooth={true} duration={500}  className={activeSection === 'about' ? 'active-link' : ''} offset={-200} >
                        About Us
                    </Link>
                </li>
                <li className='nav-items' >
                    <Link to="campus" smooth={true} duration={500}  className={activeSection === 'campus' ? 'active-link' : ''} offset={-170} >
                        Campus
                    </Link>
                </li>
                <li className='nav-items' >
                    <Link to="testimonials" smooth={true} duration={500} className={activeSection === 'testimonials' ? 'active-link' : ''} offset={-280} >
                        Testimonials
                    </Link>
                </li>
                <li className='nav-items' >
                    <Link to="contact" smooth={true} duration={500}  className={activeSection === 'contact' ? 'active-link' : ''} offset={0} >
                        <button className={`btn ${activeSection === 'contact' ? 'active-link' : ''} `}>Contact Us</button>
                    </Link>
                </li>
            </ul>

            {hidden ? <img onClick={hideOrShowSideBar} className='menu-icon' src={assets.menu} alt="" /> : <RiCloseLine onClick={hideOrShowSideBar} className='close-icon'   />}


        </nav>
    )
}

export default NavBar