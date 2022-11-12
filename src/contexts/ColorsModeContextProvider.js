import React, {createContext, useEffect, useState} from 'react';
import * as store from "store";

export const ColorsContext = createContext(null)

const ColorsModeContextProvider = ({children}) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const changeMode = () => {
        setIsDarkMode(!isDarkMode)
        store.set('darkMode', !isDarkMode)
    }

    useEffect(() => {
        // check store
        let x = store.get('darkMode')
        if (x) {
            setIsDarkMode(x)
        } else {
            store.set('darkMode', isDarkMode)
        }

        console.log('colors context created')
    }, [])

    return (
        <ColorsContext.Provider value={{isDarkMode, changeMode}}>
            {children}
        </ColorsContext.Provider>
    );
};

export default ColorsModeContextProvider;