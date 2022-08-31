import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

render (
    // DO WE NEED TO USE A REACT NATIVE ANALOGUE OF REACT ROUTER TO SERVE DIFFERENT PAGES?
    <App />,
    document.getElementById('app')
);

// ADD MODULE.EXPORTS?