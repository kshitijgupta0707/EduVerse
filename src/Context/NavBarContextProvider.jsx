


import { createContext, useContext, useState } from "react";

export const NavBarContext = createContext();



const NavBarContextProvider = (props) => {

    //themeSwitcher
    const [darkMode, setDarkMode] = useState(false);
    const themeSwitcher = () => {

        if (darkMode) {
            setDarkMode(false);
        }
        else {
            setDarkMode(true);
        }
        // console.log(darkMode);
        //     if (darkMode) {    
        //         document.querySelector('.btn').style.backgroundColor = '#161824';
        //         document.querySelector('.btn').style.color = 'white'
        //         document.querySelector('.dark-btn').style.backgroundColor = '#0a0c14';
        //         document.querySelector('.btn').style.boxShadow = '0px 0px 6px rgba(255, 255, 255, 0.531)'
        //         // box - shadow: 


        //         document.body.style.backgroundColor = '#161824';
        //         document.body.style.color = 'white';

        //         document.querySelector('.dark-nav').style.backgroundColor = '#0a0c14';
        //         document.querySelector('.nav').style.Color = '#c0c0c0';


        //         document.querySelector('.first-title').style.color = 'rgba(255, 255, 255, 0.500)'
        //         document.querySelector('.second-title').style.color = 'rgba(255, 255, 255, 0.700)'


        //         document.querySelector('.slide').style.backgroundColor = '#161824';
        //         document.querySelector('.slide').style.boxShadow = '0px 0px 10px rgba(255, 255, 255, 0.570)'
        //         document.querySelector('.slide').style.color = '0px 0px 10px rgba(255, 255, 255, 0.500)'



        //         document.querySelector('.user-info-img').style.border = '3px solid grey'

        //         document.querySelector('.user-info-h3').style.color = 'rgba(255, 255, 255, 0.8)'



        //     }
        //     else{
        //         document.querySelector('.btn').style.backgroundColor = '#fff'
        //         document.querySelector('.btn').style.color = '#212121'
        //         document.querySelector('.dark-btn').style.backgroundColor = 'rgba(255, 255, 255, 0.500)';


        //         document.body.style.backgroundColor = '#f5f5f5';

        //         document.querySelector('.dark-nav').style.backgroundColor = '#212ea0';
        //         document.querySelector('.nav').style.color = '#fff';

        //         document.querySelector('.first-title').style.color = 'rgb(33, 46, 160)'
        //         document.querySelector('.second-title').style.color = '#000F38'

        //         document.querySelector('.slide').style.backgroundColor = '#f5f5f5';
        //         document.querySelector('.slide').style.boxShadow = '0 0 20px rgba(0,0,0,0.05)'
        //         document.querySelector('.slide').style.color = '#676767'


        //         document.querySelector('.user-info-img').style.border = '2px solid #212EA0'
        //         document.querySelector('.user-info-h3').style.color = '#212EA0'
        //     }
    }

    const contextValue = {
        darkMode,
        themeSwitcher
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