import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SendMessage from './App';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SendMessage />, document.getElementById('root'));
registerServiceWorker();
