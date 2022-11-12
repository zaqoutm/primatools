import {useEffect, useState} from 'react';
import './styles/header.css'
import AppHeader from "./components/AppHeader";
import HelloSection from "./components/HelloSection";
import OurAppsSection from "./components/OurAppsSection";
import Footer from "./components/Footer";
import OurServicesSection from "./components/OurServicesSection";
import GoTopButton from "./components/GoTopButton";

function App() {
    const [addShadowToHeader, setAddShadowToHeader] = useState(false)
    const [showTopButton, setShowTopButton] = useState(false)
    const [splashIsLoading, setSplashIsLoading] = useState(true)
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

    }, [splashIsLoading])

    if (splashIsLoading) return (<div/>)

    return (
        <div className={'app'}>
            <div className={'app-content'}>
                <AppHeader addShadowToHeader={addShadowToHeader}/>
                <HelloSection/>
                <OurAppsSection/>
                <OurServicesSection/>
            </div>
            <Footer/>
            {showTopButton && <GoTopButton/>}
        </div>
    )
        ;
}

export default App;
