import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './exodus/main';
import * as serviceWorker from './serviceWorker';

// Need to export class from all files to resolve this error
// "All files must be modules when the '--isolatedModules' flag is provided."
const Loading = ({props}: {props: string}) => <div>{props}</div>;

ReactDOM.render(
    <React.Suspense fallback={<Loading props={`"Chargement en cours..."`}/>}>
        <App />
    </React.Suspense>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();