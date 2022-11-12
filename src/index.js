import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/hello.css';
import './styles/services.css';
import './styles/phone.css';

import App from './App';
import ColorsModeContextProvider from "./contexts/ColorsModeContextProvider";

ReactDOM.render(
    <ColorsModeContextProvider>
        <App/>
    </ColorsModeContextProvider>,
    document.getElementById('root')
);