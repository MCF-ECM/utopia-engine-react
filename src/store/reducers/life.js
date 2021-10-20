import * as actionTypes from '../actions/actionTypes';


const initialState = {
    pv: 6,
};

const damage = (state) => {
    return {
        ...state,
        pv: state.pv - 1,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DAMAGE: return damage(state);
        case actionTypes.FAINT: return initialState;
        case actionTypes.GAME_OVER: return initialState;
        default: return state;
    }
};

export default reducer;
