import React, {useContext, useEffect, useState} from 'react';
import {Tween} from "react-gsap";
import {ReactComponent as Logo} from "../photos/logo.svg";
import {ReactComponent as LogoDark} from "../photos/logo-dark.svg";
import {CiDark} from "react-icons/ci";
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {ColorsContext} from "../contexts/ColorsModeContextProvider";
import {BsFillSunFill} from "react-icons/bs";

const AppHeader = ({addShadowToHeader}) => {

    const {isDarkMode, changeMode} = useContext(ColorsContext)

    const changeColorsMode = () => {
        changeMode()
        if (isDarkMode) {
            setMainHeaderColor('#fff')
        } else {
            setMainHeaderColor('#2d2d2d')
        }
    }

    const [mainHeaderColor, setMainHeaderColor] = useState('#009dff')

    useEffect(() => {

        setTimeout(() => {
            if (isDarkMode)
                setMainHeaderColor('#2d2d2d')
            else
                setMainHeaderColor('#fff')
        }, 3000)

    }, [])

    return (
        <header className={`${addShadowToHeader ? 'shadow-header' : ''}`}
                style={{backgroundColor: mainHeaderColor}}>

            <div className='header-content'>
                <div className='header-content-left'>
                    <Tween from={{opacity: 0, x: 124, delay: 3}} duration={.3}>
                        <div className={'logo'}>
                            {isDarkMode ? <LogoDark/> : <Logo/>}
                        </div>
                    </Tween>
                </div>
                <Tween from={{opacity: 0, x: -124, delay: 3}} duration={.4}>
                    <div className={'header-content-right'}>
                        <a href='#' style={{color: isDarkMode ? '#fff' : '#000'}}>Services</a>
                        <a href='#' style={{color: isDarkMode ? '#fff' : '#000'}}>Contact</a>
                        <div onClick={changeColorsMode} className={'header-button'}>
                            {isDarkMode ? <BsFillSunFill color={'#fff'}/> : <CiDark/>}
                        </div>
                        <div className={'header-button'}>
                            <HiOutlineMenuAlt4 color={isDarkMode ? '#fff' : '#000'}/>
                        </div>
                    </div>
                </Tween>
            </div>
        </header>);
};

export default AppHeader;