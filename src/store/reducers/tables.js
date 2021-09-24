import * as actionTypes from '../actions/actionTypes';


const initialState = {
    changed: false,
    'Glassrock Canyon': [1, null, 3, null, 2, 3],
};

const changed = (state, action) => {
    return {
        ...state,
        changed: action.changed,
    }
}

const updateTable = (state, action) => {
    const newState = { ...state, changed: false };

    newState[action.name] = action.table;

    return newState;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_TABLE: return updateTable(state, action);
        case actionTypes.CHANGED_TABLE: return changed(state, action);
        default: return state;
    }
};

export default reducer;
