import * as actionTypes from './actionTypes';


export const addArtifact = (id, state) => {
    return {
        type: actionTypes.ADD_ARTIFACT,
        id: id,
        state: state,
    };
};

export const addComponent = (id) => {
    return {
        type: actionTypes.ADD_COMPONENT,
        id: id,
    };
};

export const activateArtifact = (id) => {
    return {
        type: actionTypes.ACTIVATE_ARTIFACT,
        id: id,
    };
};
