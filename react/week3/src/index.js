import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const DATA = [
  { id: "todo-0", name: "buy food", date: "2020-10-08", completed: false },
  { id: "todo-1", name: "do homework", date: "2020-10-08", completed: false },
  { id: "todo-2", name: "make a presentation", date: "2020-10-08", completed: false }
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));



serviceWorker.unregister();


