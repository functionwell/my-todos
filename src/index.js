import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './scss/custom-bs.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

library.add(fas)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
