import React from 'react';
import {SplitChars, Tween} from "react-gsap";

const HelloSection = () => {
    return (
        <Tween from={{y: -56, zIndex: 2, delay: 2}} duration={1}>
            <div className={'welcome-section'}>
                <div className='centered-content relative'>

                    <div className={'hello-text-wrapper'}>
                        <Tween from={{y: 124, opacity: 0, duration: .4}} delay={.2}>
                            <h1>Hello</h1>
                        </Tween>
                        <div>
                            <Tween from={{opacity: 0}} stagger={.8} duration={.5} delay={.5}>
                                <SplitChars wrapper={<span className={'hello-text'} style={{fontSize: 28}}/>}>
                                    We&nbsp;are&nbsp;a&nbsp;software&nbsp;company
                                </SplitChars>
                            </Tween>
                        </div>
                        <div>
                            <Tween from={{opacity: 0}} stagger={.8} duration={.3} delay={1.4}>
                                <SplitChars wrapper={<span className={'hello-text'} style={{fontSize: 28}}/>}>
                                    &#13;and&nbsp;we&nbsp;create&nbsp;apps&nbsp;
                                </SplitChars>
                            </Tween>
                        </div>
                    </div>
                </div>
            </div>
        </Tween>
    );
};

export default HelloSection;