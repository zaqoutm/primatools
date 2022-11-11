import {ReactComponent as Logo} from './logo.svg'
import {useEffect, useState} from 'react';
import {SplitChars, Tween} from 'react-gsap';
import iphone from './iphone.png'
import './header.css'
import {CiDark} from 'react-icons/ci';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {BsArrowUpShort} from 'react-icons/bs';

function App() {
    const appsWeCreate = ['Web', 'Mobile']
    const [addShadowToHeader, setAddShadowToHeader] = useState(false)
    const [showTopButton, setShowTopButton] = useState(false)
    const [splashIsLoading, setSplashIsLoading] = useState(true)
    const goTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        setTimeout(() => {
            setSplashIsLoading(false)
        }, 3300)

        window.onscroll = () => {
            let y = window.scrollY
            if (y > 150) {
                setAddShadowToHeader(true)
                setShowTopButton(true)
            } else {
                setAddShadowToHeader(false)
                setShowTopButton(false)
            }
        }

        console.log(splashIsLoading)

    }, [splashIsLoading])

    if (splashIsLoading) return (<div/>)

    return (
        <div className={'app'}>
            <div className={'app-content'}>

                {showTopButton &&
                <Tween from={{y: 24}} duration={1}>
                    <div className={'go-top-button'} onClick={goTop}>
                        <Tween from={{y: 4, repeat: -1, yoyo: true,}} duration={.5}>
                            <div>
                                <BsArrowUpShort color={'rgb(6, 108, 224)'} size={24}/>
                            </div>
                        </Tween>
                    </div>
                </Tween>}

                {/**/}
                {/**/}
                {/* HEADER */}
                {/**/}
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

                <div className={'welcome-section'}>
                    <div className='centered-content relative'>

                        <div className={'hello-text-wrapper'}>
                            <Tween from={{y: -24, opacity: 0, duration: .4}} delay={.2}>
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

                {/**/
                }

                {/**/
                }
                <div className={'app-preview'}>
                    <Tween from={{y: 56, opacity: 0, duration: .4}} to={{opacity: 1, y: 0}} delay={3} stagger={.4}>
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

                <div className={'app-preview jumbotron'}>
                    <div className={'app-description order2'}>
                        <div>
                            <h1>Planning Poker</h1>
                            <p className={''}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolor eum libero
                                quasi
                                saepe sint ullam! Eum id minima perferendis quam quasi quibusdam totam voluptates?
                                Et
                                similique, voluptatem. Illum, libero?
                            </p>
                        </div>
                    </div>
                    <div className={'app-screenshots'}>
                        <img src={iphone} alt=''/>
                    </div>
                </div>


                {/* Services */
                }
                <div className={'services'}>
                    <div className={'services-title'}>
                        <span className={'colored-title-black'}>other</span><h1
                        className={'colored-title'}>Services</h1>
                    </div>

                    <div className='services-list'>
                        <div className={'service'}>
                            1
                        </div>
                        <div className={'service'}>
                            2
                        </div>
                        <div className={'service'}>
                            3
                        </div>
                    </div>

                </div>

            </div>

            {/**/
            }
            <footer>
                <div className={'centered-content'}>
                    <div className={'footer-links-container'}>
                        <div className={'logo'}>
                            <Logo/>
                        </div>
                        <div className={'footer-links'}>
                            <h4>Who We Are</h4>
                            <a href='#'>About PrimaTools</a>
                            <a href='#'>Careers</a>
                            <a href='#'>Blogs</a>
                        </div>
                        <div className={'footer-links'}>
                            <h4>Contacts</h4>
                            <a href='#'>Contact</a>
                        </div>
                    </div>
                </div>

                <div className={'footer-copy-right'}>
                    <div className='centered-content'>
                        <div className={''}>
                            <p>&copy; 2022 Prima Tools LLC.</p>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
        ;
}

export default App;
