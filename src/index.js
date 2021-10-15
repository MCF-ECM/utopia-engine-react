import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import lifeReducer from './store/reducers/life';
import regionReducer from './store/reducers/region';


const rootReducer = combineReducers({
    life: lifeReducer,
    region: regionReducer,
});

const  store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
