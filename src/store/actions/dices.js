import * as actionTypes from './actionTypes';


export const newDices = (quantity) => {
    return {
        type: actionTypes.NEW_DICES,
        quantity: quantity,
    };
};

export const roll = () => {
    return {
        type: actionTypes.ROLL_DICES,
    }
}

export const updatePosition = () => {
    return {
        type: actionTypes.UPDATE_POSITION_DICES,
    }
}

export const resetPosition = () => {
    return {
        type: actionTypes.REST_POSITION_DICES,
    }
}
