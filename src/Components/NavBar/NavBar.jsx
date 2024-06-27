import React, { useEffect, useRef, useState } from 'react'
import "./NavBar.css"
import { assets } from '../../assets/index'
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {

    const navbar = useRef();
    const sideBar = useRef(null);

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            let amount = window.scrollY;
            console.log('height = ' + window.innerHeight);
            if (amount > 50) {
                setSticky(true);
            }
            else {
                setSticky(false);
            }

        })
    }, [])
    // scrollToTop = () => {
    //     scroll.scrollToTop();
    // };
    // useEffect(() => {
    //     if (sticky) {
    //         navbar.current.classList.add('dark-nav');
    //     }
    //     else {
    //         navbar.current.classList.remove('dark-nav');
    //     }
    // }, [sticky])




    // document.addEventListener('click', (e) => {
    //     const id = e.target.id;
    //     if (id != 'sideBar' && !hidden) {
    //         setHidden(true);
    //     }

    // })

    const hideSideBar = () => {
        sideBar.current.style.transform = 'translateX(200px)';
        setHidden(true);
    }






    const [hidden, setHidden] = useState(true);
    const hideOrShowSideBar = () => {
        if (hidden) {
            sideBar.current.style.transform = 'translateX(0px)';
        }
        else {
            sideBar.current.style.transform = 'translateX(200px)';
        }
        setHidden(!hidden)
    }
    const handleResize = () => {
        if (sideBar) {
            if (window.innerWidth > 850) {
                sideBar.current.style.transform = 'translateX(0px)';
            } else {
                sideBar.current.style.transform = 'translateX(200px)';
            }
        }
    };
    window.addEventListener('resize', handleResize);




    useEffect(() => {
        const handleClickOutside = (event) => {
            if (window.innerWidth < 700) {
                if (sideBar.current && !sideBar.current.contains(event.target) && !navbar.current.contains(event.target)) {
                    hideSideBar();
                }
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);





    return (

        <nav ref={navbar} className={`container ${sticky ? "dark-nav" : ""}`} >

            <img className='logo' src={assets.logo} alt="" />

            <ul ref={sideBar} id='sideBar' >
                <li>
                    <Link to="home" smooth={true} duration={500} offset={0} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="programs" smooth={true} duration={500} offset={-170} >
                        Programs
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} offset={-200} >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="campus" smooth={true} duration={500} offset={-170} >
                        Campus
                    </Link>
                </li>
                <li>
                    <Link to="testimonials" smooth={true} duration={500} offset={-280} >
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} offset={0} >
                        <button className='btn'>Contact Us</button>
                    </Link>
                </li>
            </ul>


            <img onClick={hideOrShowSideBar} className='menu-icon' src={assets.menu} alt="" />


        </nav>
    )
}

export default NavBar