import React from 'react';
import {Tween} from "react-gsap";
import {ReactComponent as Logo} from "../photos/logo.svg";
import {CiDark} from "react-icons/ci";
import {HiOutlineMenuAlt4} from "react-icons/hi";

const AppHeader = ({addShadowToHeader}) => {
    return (
        <Tween
            from={{backgroundColor: '#009dff'}}
            to={{backgroundColor: '#fff', delay: 3}}
            duration={.4}
        >
            <header className={`${addShadowToHeader ? 'shadow-header normal-height' : ''}`}>
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
                            <div className={'header-button'}><CiDark/></div>
                            <div className={'header-button'}><HiOutlineMenuAlt4/></div>
                        </div>
                    </Tween>
                </div>
            </header>
        </Tween>

    );
};

export default AppHeader;