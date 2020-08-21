import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const DATA = [
  { id: "1", name: "buy food", completed: false },
  { id: "2", name: "do homework", completed: false },
  { id: "3", name: "make a presentation", completed: false }
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));



serviceWorker.unregister();


