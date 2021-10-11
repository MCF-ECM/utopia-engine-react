import * as actionTypes from '../actions/actionTypes';
import { getRandomDice } from '../../shared/utility';

const initialState = {
    quantity: 0,
    current: -1,
    dices: [],
};

const newDices = (state, action) => {
    const dices = [];

    for (let i = 0; i < action.quantity; i++) {
        dices[i] = null;
    }

    return {
        ...state,
        quantity: action.quantity,
        current: -1,
        dices: dices,
    };
};

const roll = (state) => {
    const dices = [];

    for (let i = 0; i < state.quantity; i++) {
        dices[i] = getRandomDice();
    }

    return {
        ...state,
        current: 0,
        dices: dices,
    }
};

const updatePosition = (state) => {
    return {
        ...state,
        current: state.current + 1,
    }
}

const resetPosition = (state) => {
    return {
        ...state,
        current: 0,
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEW_DICES: return newDices(state, action);
        case actionTypes.ROLL_DICES: return roll(state);
        case actionTypes.UPDATE_POSITION_DICES: return updatePosition(state);
        case actionTypes.REST_POSITION_DICES: return resetPosition(state);
        case actionTypes.GAME_OVER: return initialState;
        default: return state;
    }
};

export default reducer;
