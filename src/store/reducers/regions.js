import * as actionTypes from '../actions/actionTypes';


const initialState = {
    current: "Map",
    "Map": {
        color: '#463424',
    },
    "Halebeard Peak": {
        color: "#808080",
        component: "Silver",
        artifact: "Seal of Balance",
        treasure: "Ice Plate",
    },
    "The Great Wilds": {
        color: "#556B2F",
        component: "Quartz",
        artifact: "Hermetic Mirror",
        treasure: "Bracelet of Ios",
    },
    "Root-Strangled Marshes": {
        color: "#FFB833",
        component: "Gum",
        artifact: "Void Gate",
        treasure: "Shimmering Moonlace",
    },
    "Glassrock Canyon": {
        color: "#FFFF66",
        component: "Silica",
        artifact: "Golden Chassis",
        treasure: "Scale of the Infinity Wurm",
    },
    "Ruined City of the Ancient": {
        color: "#008080",
        component: "Wax",
        artifact: "Scrying Lens",
        treasure: "The Ancient Record",
    },
    "The Fiery Maw": {
        color: "#CC8500",
        component: "Lead",
        artifact: "Crystal Battery",
        treasure: "The Molten Shard",
    },
};

const updateRegion = (state, action) => {
    return {
        ...state,
        current: action.region,
        color: state[action.region].color,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_REGION: return updateRegion(state, action);
        default: return state;
    }
};

export default reducer;
