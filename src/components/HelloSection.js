import React from 'react';
import {SplitChars, Tween} from "react-gsap";

const HelloSection = () => {
    return (
        <Tween from={{
            height: '100vh',
            backgroundColor: '#009dff', color: '#fff'
        }}
               to={{
                   backgroundColor: '#fff', color: '#606060', delay: 3
               }}
               duration={.4}>

            <div className={'welcome-section'}>
                <div className='centered-content relative'>
                    <div className={'hello-text-wrapper'}>

                        <Tween from={{y: -32, opacity: 0, ease: 'bounce'}} delay={.2} duration={1}>
                            <h1>Hello</h1>
                        </Tween>
                        <div>
                            <Tween from={{opacity: 0}} stagger={.8} duration={.5} delay={1}>
                                <SplitChars wrapper={<span className={'hello-text'}/>}>
                                    We&nbsp;are&nbsp;a&nbsp;software&nbsp;company
                                </SplitChars>
                            </Tween>
                        </div>
                        <div className={'hello-text-create-apps hello-text'}>
                            <Tween from={{opacity: 0, y: -12}} duration={.2}
                                   delay={1.4}>
                                <span>and</span>
                                <span>we</span>
                                <span>create</span>
                                <span>apps</span>
                            </Tween>
                        </div>

                    </div>
                </div>
            </div>
        </Tween>
    );
};

export default HelloSection;