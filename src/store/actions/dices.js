import * as actionTypes from './actionTypes';


export const newDices = (quantity) => {
    return {
        type: actionTypes.NEW_DICE,
        quantity: quantity,
    };
};

export const roll = () => {
    return {
        type: actionTypes.ROLL_DICE,
    }
}
