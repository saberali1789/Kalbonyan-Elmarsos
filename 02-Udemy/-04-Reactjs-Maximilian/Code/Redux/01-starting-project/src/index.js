import React from 'react';
import ReactDOM from 'react-dom/client';
import {provider} from 'react-redux'

import './index.css';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<provider store={store}><App/></provider> );
