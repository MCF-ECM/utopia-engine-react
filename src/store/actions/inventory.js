import * as actionTypes from './actionTypes';


export const addArtifact = (id, state) => {
    console.log(id);
    console.log(state);

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
