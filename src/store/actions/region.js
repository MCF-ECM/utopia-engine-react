import * as actionTypes from './actionTypes';


export const updateRegion = (id, region, color) => {
    return {
        type: actionTypes.UPDATE_REGION,
        id: id,
        region: region,
        color: color,
    };
};

export const updateMonster = (level, monster) => {
    return {
        type: actionTypes.UPDATE_MONSTER,
        level: level,
        monster: monster,
    };
};

export const updateArtifact = (id, artifact, color) => {
    return {
        type: actionTypes.UPDATE_ARTIFACT,
        id: id,
        artifact: artifact,
        color: color,
    };
};
