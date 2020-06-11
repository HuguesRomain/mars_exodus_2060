import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './exodus/App';
import * as serviceWorker from './serviceWorker';

// Need to export class from all files to resolve this error
// "All files must be modules when the '--isolatedModules' flag is provided."

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();