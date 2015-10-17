import React from 'react';
import { render } from 'react-dom';
import API from './API';
import AppContainer from './containers/AppContainer';

render(<AppContainer { ...API } />, document.getElementById('root'));
