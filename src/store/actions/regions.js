import * as actionTypes from './actionTypes';


export const updateRegion = (region) => {
    return {
        type: actionTypes.UPDATE_REGION,
        region: region,
    };
};
