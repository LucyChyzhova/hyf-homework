import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App';

const Context = () => {
  return (
    <App/>
  )
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Context />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

