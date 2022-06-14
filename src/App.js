import {ReactComponent as Logo} from './logo.svg'
import space from './space.mp4'
import {useEffect} from "react";
import {SplitChars, Tween} from "react-gsap";
import gsap from 'gsap'

function App() {

    useEffect(() => {
        // var vid = document.getElementById("space-video");
        // vid.playbackRate = 0.4;

        gsap.timeline()
            .set('.cursor1', {opacity: .2})
            .fromTo('.cursor1', {opacity: 0}, {opacity: 1, repeat: 3})
            .to('.cursor1', {x: '94%', duration: 2.2})
            .to('.cursor1', {opacity: 0, duration: 0})

        gsap.timeline()
            .set('.cursor2', {opacity: 0, delay: 4})
            .to('.cursor2', {x: '40%', duration: 1.4, opacity: 1})
            .fromTo('.cursor2', {opacity: 0}, {opacity: 1, repeat: 3})
            .to('.cursor2', {opacity: .3})

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
                        <Tween from={{opacity: 0}} stagger={.8}
                               duration={3} delay={2}>
                            <SplitChars wrapper={<span className={'hello-text'}/>}>
                                Hello,&nbsp;We&nbsp;are&nbsp;a&nbsp;software&nbsp;company,&#10;and&nbsp;we&nbsp;create
                            </SplitChars>
                        </Tween>

                        <p className={'cursor1'}>
                            <span>|</span>
                        </p>
                        <p className={'cursor2'}>
                            <span>|</span>
                        </p>

                    </div>
                </div>

                <video id="space-video" src={space} loop muted autoPlay playsInline/>

                <div className={'services'}>
                    services list
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
