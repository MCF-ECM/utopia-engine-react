import * as actionTypes from '../actions/actionTypes';


const initialState = {
    changed: false,
    "Halebeard Peak": [null, null, null, null, null, null],
    "The Great Wilds": [null, null, null, null, null, null],
    "Root-Strangled Marshes": [null, null, null, null, null, null],
    "Glassrock Canyon": [null, null, null, null, null, null],
    "Ruined City of the Ancient": [null, null, null, null, null, null],
    "The Fiery Maw": [null, null, null, null, null, null],
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
