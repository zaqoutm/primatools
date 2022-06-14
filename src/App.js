import {ReactComponent as Logo} from './logo.svg'
import space from './space.mp4'
import {useEffect} from "react";
import {SplitChars, Tween} from "react-gsap";
import gsap from 'gsap'

function App() {

    const appsWeCreate = ['Web apps', 'Mobile apps']

    useEffect(() => {
        gsap.timeline()
        // .fromTo('.app', {opacity: 0}, {opacity: 0.2, duration: 0.9})
        // .to('.app', {opacity: 1, y: 0, duration: .2})

        // var vid = document.getElementById("space-video");
        // vid.playbackRate = 0.4;

        gsap.timeline()
            .set('.cursor1', {opacity: .2})
            .fromTo('.cursor1', {opacity: 0}, {opacity: 1, repeat: 3})
            .to('.cursor1', {x: '94%', duration: 2.2})
            .to('.cursor1', {opacity: 0, duration: 0})

        let crsrTL = gsap.timeline()
            .set('.cursor2', {opacity: 0})
            .to('.cursor2', {delay: 4, x: '40%', duration: 1.4, opacity: 1})
            .fromTo('.cursor2', {opacity: 0}, {opacity: 1, repeat: 3})
            .to('.cursor2', {opacity: 0})

        // gsap.timeline()
        //     .set('.welcome-apps-list', {opacity: 0, y: 20})
        //     .to('.welcome-apps-list', {delay: 6, opacity: 1, y: 0})

        gsap.timeline().set(['.item1', '.item2'], {opacity: 0.2, y: 38})

        let appsTL = gsap.timeline({repeat: -1, repeatDelay: 0})
        let item1TL = gsap.timeline()
            .to('.item1', {y: 0, opacity: 1, duration: .2})
            .to('.item1', {delay: 1, duration: .2, opacity: 0})
        let item2TL = gsap.timeline()
            .to('.item2', {y: 0, opacity: 1, duration: .2})
            .to('.item2', {delay: 1, duration: .2, opacity: 0})
        appsTL.add(item1TL)
        appsTL.add(item2TL)
        crsrTL.add(appsTL)

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

                        <div className={'welcome-apps-list'}>
                            <p style={{opacity: 0}}>
                                &#10;and&nbsp;we&nbsp;create
                            </p>

                            {/*    /!* loop on apps list *!/*/}
                            {appsWeCreate.map((a, i) => <div key={a}
                                                             className={`item item${i + 1}`}>
                                <p>{a}</p>
                            </div>)}
                        </div>

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
