import {ReactComponent as Logo} from './logo.svg'

function App() {
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

                <div>
                    <div className={'welcome'}>
                        <div className="centered-content">
                            <p>We are a software company, and we create</p>
                        </div>
                    </div>
                    <div className={'services'}>
                        services list
                    </div>
                </div>

                {/**/}
                <div className={'retro'}>
                    <h1>Retro</h1>
                </div>
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
