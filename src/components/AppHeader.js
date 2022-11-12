import React, {useContext, useEffect} from 'react';
import {Tween} from "react-gsap";
import {ReactComponent as Logo} from "../photos/logo.svg";
import {CiDark} from "react-icons/ci";
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {ColorsContext} from "../contexts/ColorsModeContextProvider";

const AppHeader = ({addShadowToHeader}) => {

    const {isDarkMode, changeMode} = useContext(ColorsContext)

    const changeColorsMode = () => {
        changeMode()
    }

    useEffect(() => {
    }, [])

    return (
        <Tween
            from={{backgroundColor: '#009dff'}}
            to={{backgroundColor: '#fff', delay: 3}}
            duration={.4}
        >
            <header className={`${addShadowToHeader ? 'shadow-header' : ''}`}>

                <h1>{JSON.stringify(isDarkMode)}</h1>

                <div className='header-content'>
                    <div className='header-content-left'>
                        <Tween from={{opacity: 0, x: 124, delay: 3}} duration={.3}>
                            <div className={'logo'}>
                                <Logo/>
                            </div>
                        </Tween>
                    </div>
                    <Tween from={{opacity: 0, x: -124, delay: 3}} duration={.4}>
                        <div className={'header-content-right'}>
                            <a href='#'>Services</a>
                            <a href='#'>Contact</a>
                            <div onClick={changeColorsMode} className={'header-button'}><CiDark/></div>
                            <div className={'header-button'}><HiOutlineMenuAlt4/></div>
                        </div>
                    </Tween>
                </div>
            </header>
        </Tween>

    );
};

export default AppHeader;