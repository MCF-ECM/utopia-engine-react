import * as actionTypes from '../actions/actionTypes';


const initialState = [
    {
        component: {
            name: "Silver",
            quantity: 0,
        },
        artifact: {
            name: "Seal of Balance",
            state: null,
        },
        treasure: "Ice Plate",
        color: "#808080",
    },
    {
        component: {
            name: "Quartz",
            quantity: 0,
        },
        artifact: {
            name: "Hermetic Mirror",
            state: null,
        },
        treasure: "Bracelet of Ios",
        color: "#556B2F",
    },
    {
        component: {
            name: "Gum",
            quantity: 0,
        },
        artifact: {
            name: "Void Gate",
            state: null,
        },
        treasure: "Shimmering Moonlace",
        color: "#FFB833",
    },
    {
        component: {
            name: "Silica",
            quantity: 0,
        },
        artifact: {
            name: "Golden Chassis",
            state: null,
        },
        treasure: "Scale of the Infinity Wurm",
        color: "#FFFF66",
    },
    {
        component: {
            name: "Wax",
            quantity: 0,
        },
        artifact: {
            name: "Scrying Lens",
            state: null,
        },
        treasure: "The Ancient Record",
        color: "#008080",
    },
    {
        component: {
            name: "Lead",
            quantity: 0,
        },
        artifact: {
            name: "Crystal Battery",
            state: null,
        },
        treasure: "The Molten Shard",
        color: "#CC8500",
    },
];


const addArtifact = (state, action) => {
    const newState = [...state];

    if (newState[action.id].artifact.state === null) {
        newState[action.id].artifact.state = action.state;

        return newState; 
    } else {
        return addComponent(state, action);
    }
};

const addComponent = (state, action) => {
    const newState = [...state];

    newState[action.id].component.quantity += 1;

    return newState;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ARTIFACT: return addArtifact(state, action);
        case actionTypes.ADD_COMPONENT: return addComponent(state, action);
        case actionTypes.GAME_OVER: return initialState;
        default: return state;
    }
};

export default reducer;
