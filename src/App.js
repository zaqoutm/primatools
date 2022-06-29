import {ReactComponent as Logo} from './logo.svg'
import space from './space.mp4'
import {useEffect} from 'react';
import {SplitChars, Tween} from 'react-gsap';
import iphone from './iphone.png'

function App() {

    const appsWeCreate = ['Web', 'Mobile']

    useEffect(() => {
    }, [])

    return (
        <div className={'app'}>

            {/**/}
            <div className={'app-content'}>

                <header>
                    <div className={'centered-content'}>
                        <div className="header-content">
                            <div className={'logo'}>
                                <Logo/>
                            </div>
                        </div>
                    </div>
                </header>

                <div className={'welcome'}>
                    <div className="centered-content relative">

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

                {/**/}
                <Tween from={{y: 56, opacity: 0, duration: .4}} to={{opacity: 1, y: 0}} delay={2}>
                    <div className="space-video-container">

                        <div className={'welcome-apps-list'}>
                            <Tween delay={2} from={{y: 256, opacity: 0, duration: .8}} stagger={.2}>
                                {appsWeCreate.map((a, i) =>
                                    <div key={a} className={`item item${i + 1}`}>
                                        <p>{a}</p>
                                    </div>)}
                            </Tween>
                        </div>

                        <video id="space-video" src={space} loop muted autoPlay playsInline/>
                    </div>
                </Tween>

                {/**/}
                <div className={'app-preview'}>
                    <Tween from={{y: 56, opacity: 0, duration: .4}} to={{opacity: 1, y: 0}} delay={3} stagger={.4}>
                        <div className={'app-description'}>
                            <div>
                                <h1>Retro</h1>
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
                            <img src={iphone} alt=""/>
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
                        <img src={iphone} alt=""/>
                    </div>
                </div>


                {/* Services */}
                <div className={'services'}>
                    <div className={'services-title'}>
                        <span className={'colored-title-black'}>other</span><h1
                        className={'colored-title'}>Services</h1>
                    </div>

                    <div className="services-list">
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

            {/**/}
            <footer>
                <div className={'centered-content'}>
                    <div className={'footer-links-container'}>
                        <div className={'logo'}>
                            <Logo/>
                        </div>
                        <div className={'footer-links'}>
                            <h4>Who We Are</h4>
                            <a href="#">About PrimaTools</a>
                            <a href="#">Careers</a>
                            <a href="#">Blogs</a>
                        </div>
                        <div className={'footer-links'}>
                            <h4>Contacts</h4>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>

                <div className={'footer-copy-right'}>
                    <div className="centered-content">
                        <div className={''}>
                            <p>&copy; 2022 Prima Tools LLC.</p>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default App;
