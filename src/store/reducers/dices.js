import * as actionTypes from '../actions/actionTypes';


const initialState = {
    quantity: 0,
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
        dices: dices,
    };
};

const getRandomDice = () => {
    return Math.floor(Math.random() * 6) + 1;
};

const roll = (state) => {
    const dices = [];

    for (let i = 0; i < state.quantity; i++) {
        dices[i] = getRandomDice();
    }

    return {
        ...state,
        dices: dices,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEW_DICE: return newDices(state, action);
        case actionTypes.ROLL_DICE: return roll(state);
        default: return state;
    }
};

export default reducer;
