import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore'

import './index.css';
import Root from './components/Root';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore()


ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
