import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {priceReducer} from './reducers/reducers'

import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from 'redux';

const store = createStore(priceReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
   <App />
   </Provider>
   , rootElement);
