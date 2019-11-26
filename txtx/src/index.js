import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParentApp from './parentApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ParentApp />, document.getElementById('root'));

serviceWorker.unregister();
