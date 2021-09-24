import * as actionTypes from '../actions/actionTypes';


const initialState = {
    title: 'Map',
    color: '#463424',
};

const updateTitle = (state, action) => {
    return {
        ...state,
        title: action.title,
        color: action.color,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_TITLE: return updateTitle(state, action);
        default: return state;
    }
};

export default reducer;
