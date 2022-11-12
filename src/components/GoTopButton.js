import React from 'react';
import {Tween} from "react-gsap";
import {BsArrowUpShort} from "react-icons/bs";

const GoTopButton = () => {
    const goTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <Tween from={{y: 24}} duration={1}>
            <div className={'go-top-button'} onClick={goTop}>
                <Tween from={{y: 4, repeat: -1, yoyo: true,}} duration={.5}>
                    <div>
                        <BsArrowUpShort color={'rgb(6, 108, 224)'} size={24}/>
                    </div>
                </Tween>
            </div>
        </Tween>);
};

export default GoTopButton;