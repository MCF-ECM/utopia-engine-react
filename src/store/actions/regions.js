import * as actionTypes from './actionTypes';


export const updateRegion = (region) => {
    return {
        type: actionTypes.UPDATE_REGION,
        region: region,
    };
};

export const updateMonster = (level) => {
    return {
        type: actionTypes.UPDATE_MONSTER,
        level: level,
    };
};