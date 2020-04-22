import React from 'react';
import ReactDOM from 'react-dom';

import '../css/app.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

const App = () => {
    return <>
        <Navbar />

        <HomePage/>
    </>
};

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
