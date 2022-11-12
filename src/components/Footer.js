import React from 'react';
import {ReactComponent as Logo} from "../photos/logo.svg";

const Footer = () => {
    return (
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
    );
};

export default Footer;