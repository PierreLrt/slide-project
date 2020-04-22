import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import '../css/app.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

const App = () => {
    return <>
        <HashRouter>
            <Navbar />

            <Switch>
                <Route path="/test" component={TestPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </HashRouter>
    </>
};

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
