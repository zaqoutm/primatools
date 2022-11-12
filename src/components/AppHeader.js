import React from 'react';
import {Tween} from "react-gsap";
import {ReactComponent as Logo} from "../statics/logo.svg";
import {CiDark} from "react-icons/ci";
import {HiOutlineMenuAlt4} from "react-icons/hi";

const AppHeader = ({addShadowToHeader}) => {
    return (
        <Tween from={{y: -24}} duration={2}>
            <header className={`${addShadowToHeader ? 'shadow-header' : ''}`}>
                <div className='header-content'>
                    <Tween from={{opacity: 0, y: -24, delay: 2.2}} duration={.4}>
                        <div className='header-content-left'>
                            <div className={'logo'}>
                                <Logo/>
                            </div>
                        </div>
                    </Tween>
                    <Tween from={{opacity: 0, y: 24, delay: 2.2}} duration={.4}>
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