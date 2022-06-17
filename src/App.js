import {ReactComponent as Logo} from './logo.svg'
import space from './space.mp4'
import {useEffect} from "react";
import {SplitChars, Tween} from "react-gsap";
import gsap from 'gsap'

function App() {

    const appsWeCreate = ['Web', 'Mobile']

    useEffect(() => {
        // gsap.timeline()
        // .fromTo('.app', {opacity: 0}, {opacity: 0.2, duration: 0.9})
        // .to('.app', {opacity: 1, y: 0, duration: .2})

        // var vid = document.getElementById("space-video");
        // vid.playbackRate = 0.4;
        gsap.timeline().set(['.item1', '.item2'], {opacity: 0, y: 58})

        let appsTL = gsap.timeline({delay: 4, repeat: -1, repeatDelay: 0})
        let item1TL = gsap.timeline()
            .to('.item1', {y: 0, opacity: 1, duration: .2})
            .to('.item1', {delay: 1, duration: .2, opacity: 0})
        let item2TL = gsap.timeline()
            .to('.item2', {y: 0, opacity: 1, duration: .2})
            .to('.item2', {delay: 1, duration: .2, opacity: 0})
        appsTL.add(item1TL)
        appsTL.add(item2TL)

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
                            <div>
                                <Tween from={{opacity: 0}} stagger={.8} duration={.2} delay={1}>
                                    <SplitChars wrapper={<span className={'hello-text'}/>}>
                                        Hello,
                                    </SplitChars>
                                </Tween>
                            </div>
                            <div>
                                <Tween from={{opacity: 0}} stagger={.8} duration={.4} delay={2}>
                                    <SplitChars wrapper={<span className={'hello-text'} style={{fontSize: 28}}/>}>
                                        We&nbsp;are&nbsp;a&nbsp;software&nbsp;company
                                    </SplitChars>
                                </Tween>
                            </div>
                            <div>
                                <Tween from={{opacity: 0}} stagger={.8} duration={.4} delay={3}>
                                    <SplitChars wrapper={<span className={'hello-text'} style={{fontSize: 28}}/>}>
                                        &#13;and&nbsp;we&nbsp;create&nbsp;apps&nbsp;
                                    </SplitChars>
                                </Tween>
                            </div>
                        </div>

                        <div className={'welcome-apps-list'}>
                            {appsWeCreate.map((a, i) =>
                                <div key={a} className={`item item${i + 1}`}>
                                    <span>for</span><p>{a}</p>
                                </div>)}
                        </div>
                    </div>

                </div>

                {/**/}
                <div className="space-video-container">
                    <video id="space-video" src={space} loop muted autoPlay playsInline/>
                </div>

                {/* Services */}
                <div className={'services'}>
                    <div className={'services-title'}>
                        <h1 className={'colored-title'}>Services</h1>
                    </div>

                    <div className="services-list">
                        <div className={'service'}>
                            Service 1
                        </div>
                        <div className={'service'}>
                            Service 2
                        </div>
                        <div className={'service'}>
                            Service 3
                        </div>
                    </div>

                </div>

                {/**/}
                {/*<div className={'retro'}>*/}
                {/*    <h1>Retro</h1>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <h1>Planning Poker</h1>*/}
                {/*</div>*/}


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
