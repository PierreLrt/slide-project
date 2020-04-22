import React from 'react';
import ReactDOM from 'react-dom';

import '../css/app.css';

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

const App = () => {
    return <h1>Bonjour</h1>;
};

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);
