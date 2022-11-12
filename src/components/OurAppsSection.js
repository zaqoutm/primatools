import React from 'react';
import {Tween} from "react-gsap";
import iphone from "../photos/iphone.png";

const OurAppsSection = () => {
    return (
        <Tween from={{opacity: 0, y: 24, delay: 3}} duration={.4}>
            <div className="our-apps" id={'apps-section'}>
                <div className={'app-preview'}>
                    <Tween from={{y: 56, opacity: 0, duration: .2}} to={{opacity: 1, y: 0}} delay={3.5}
                           duration={.5}
                           stagger={.4}>
                        <div className={'app-description'}>
                            <div>
                                <h1>Retro</h1>
                                <p className={''}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolor eum
                                    libero
                                    quasi
                                    saepe sint ullam! Eum id minima perferendis quam quasi quibusdam totam
                                    voluptates?
                                    Et
                                    similique, voluptatem. Illum, libero?
                                </p>
                            </div>
                        </div>
                        <div className={'app-screenshots'}>
                            <img src={iphone} alt=''/>
                        </div>
                    </Tween>
                </div>

                <div className={'app-preview'}>
                    <Tween from={{y: 56, opacity: 0, duration: .2}} to={{opacity: 1, y: 0}} delay={3.5}
                           duration={.5}
                           stagger={.4}>
                        <div className={'app-description order2'}>
                            <div>
                                <h1>Planning Poker</h1>
                                <p className={''}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi
                                    asperiores
                                    atque beatae commodi consectetur delectus dicta doloribus fugiat illo in
                                    modi
                                    molestias,
                                    nam necessitatibus omnis praesentium sint vitae voluptatum?
                                </p>
                            </div>
                        </div>
                        <div className={'app-screenshots'}>
                            <img src={iphone} alt=''/>
                        </div>
                    </Tween>
                </div>
            </div>
        </Tween>
    );
};

export default OurAppsSection;