
import React from "react";

import { createContext, useContext, useState, useRef, useEffect } from "react";
import { animateScroll as scroll, Events } from "react-scroll";


export const NavBarContext = createContext();



const NavBarContextProvider = (props) => {
    
    //themeSwitcher
    const [darkMode, setDarkMode] = useState(false);
    const [hidden, setHidden] = useState(true);
    const navbar = useRef();
    const sideBar = useRef(null);

    const [sticky, setSticky] = useState(false);

    const themeSwitcher = () => {

        if (darkMode) {
            setDarkMode(false);
        }
        else {
            setDarkMode(true);
        }

    }
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
    const hideSideBar = () => {
        sideBar.current.style.transform = 'translateX(200px)';
        setHidden(true);
    }


 useEffect(()=>{
     if (window.innerWidth < 850) {
         setHidden(true);
     }
 } , [])



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
            if (window.innerWidth < 850) {
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




    const [activeSection, setActiveSection] = useState('');
    const sections = ['home', 'programs', 'about', 'campus', 'testimonials', 'contact'];

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    // Adding an event listener for scroll events
    React.useEffect(() => {
        Events.scrollEvent.register('begin', (to, element) => {
            setActiveSection(to);
        });

        Events.scrollEvent.register('end', (to, element) => {
            setActiveSection(to);
        });

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);



    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the section is in view
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sections]);






    const contextValue = {
        darkMode,
        themeSwitcher,
        navbar,
        sideBar,
        sticky, setSticky,
        hidden, setHidden,
        hideSideBar, hideOrShowSideBar,
        handleResize,
        activeSection, setActiveSection, handleSetActive, sections,

    }

    return (
        <>
            <NavBarContext.Provider value={contextValue} >
                {props.children}
            </NavBarContext.Provider>
        </>
    )
}

export default NavBarContextProvider
export const useNavBarContext = () => useContext(NavBarContext)