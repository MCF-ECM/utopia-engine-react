import * as actionTypes from './actionTypes';


export const damage = () => {
    return {
        type: actionTypes.DAMAGE,
    };
};

export const gameOver = () => {
    return {
        type: actionTypes.GAME_OVER,
    };
};
