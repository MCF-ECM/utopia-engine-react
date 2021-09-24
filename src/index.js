import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './index.css';
import App from './App';
import dicesReducer from './store/reducers/dices';
import instructionsReducer from './store/reducers/instructions';
import tablesReducer from './store/reducers/tables';


const rootReducer = combineReducers({
    dices: dicesReducer,
    instructions: instructionsReducer,
    tables: tablesReducer,
})

const  store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
