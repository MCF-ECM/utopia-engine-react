import * as actionTypes from './actionTypes';


export const updateTitle = (title, color) => {
    return {
        type: actionTypes.UPDATE_TITLE,
        title: title,
        color: color,
    };
};
