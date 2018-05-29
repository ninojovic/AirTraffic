import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

import 'materialize-css/dist/css/materialize.min.css'

import App from "./App/App"


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root'));

registerServiceWorker();