import React from 'react';
import { render } from 'react-dom';
import API from './API';
import App from './components/App';

render(<App {...API} />, document.getElementById('root'));
