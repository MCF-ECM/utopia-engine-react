import * as actionTypes from '../actions/actionTypes';


const initialState = {
    current: "",
    color: "",
    monster: "",
    level: "",
    "Halebeard Peak": {
        color: "#808080",
        component: "Silver",
        artifact: "Seal of Balance",
        treasure: "Ice Plate",
        monsters: [
            "Ice Bear",
            "Roving Bandits",
            "Blood Wolves",
            "Horse Eater Hawk",
            "The Hollow Giant",
        ],
    },
    "The Great Wilds": {
        color: "#556B2F",
        component: "Quartz",
        artifact: "Hermetic Mirror",
        treasure: "Bracelet of Ios",
        monsters: [
            "Rogue Thief",
            "Blanket of Crows",
            "Hornback Bison",
            "Grassyback Troll",
            "Thunder King",

        ],
    },
    "Root-Strangled Marshes": {
        color: "#FFB833",
        component: "Gum",
        artifact: "Void Gate",
        treasure: "Shimmering Moonlace",
        monsters: [
            "Gemscale Boa",
            "Ancient Alligator",
            "Land Shark",
            "Abyssal Leech",
            "Dweller in the Tides",
        ],
    },
    "Glassrock Canyon": {
        color: "#FFFF66",
        component: "Silica",
        artifact: "Golden Chassis",
        treasure: "Scale of the Infinity Wurm",
        monsters: [
            "Feisty Gremlin",
            "Glasswing Drake",
            "Reaching Claws",
            "Terrible Wurm",
            "Infinity Wurm",
        ],
    },
    "Ruined City of the Ancient": {
        color: "#008080",
        component: "Wax",
        artifact: "Scrying Lens",
        treasure: "The Ancient Record",
        monsters: [
            "Grave Robbers",
            "Ghost Lights",
            "Vengeful Shade",
            "Nightmare Crab",
            "The Unnamed",
        ],
    },
    "The Fiery Maw": {
        color: "#CC8500",
        component: "Lead",
        artifact: "Crystal Battery",
        treasure: "The Molten Shard",
        monsters: [
            "Minor Imp",
            "Renegade Warlock",
            "Giant Flame Lizard",
            "Spark Elemental",
            "Volcano Spirit",
        ],
    },
};

const updateRegion = (state, action) => {
    return {
        ...state,
        current: action.region,
        color: state[action.region].color,
    };
};

const updateMonster = (state, action) => {
    return {
        ...state,
        monster: state[state.current].monsters[action.level],
        level: action.level,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_REGION: return updateRegion(state, action);
        case actionTypes.UPDATE_MONSTER: return updateMonster(state, action);
        case actionTypes.GAME_OVER: return initialState;
        default: return state;
    }
};

export default reducer;
