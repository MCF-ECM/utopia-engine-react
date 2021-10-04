import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import dicesReducer from './store/reducers/dices';
import regionsReducer from './store/reducers/regions';
import tablesReducer from './store/reducers/tables';


const rootReducer = combineReducers({
    dices: dicesReducer,
    regions: regionsReducer,
    tables: tablesReducer,
})

const  store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
