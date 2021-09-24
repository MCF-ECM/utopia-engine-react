const initialState = {
    "Halebeard Peak": {
        component: "Silver",
        artifact: "Seal of Balance",
        treasure: "Ice Plate",
    },
    "The Great Wilds": {
        component: "Quartz",
        artifact: "Hermetic Mirror",
        treasure: "Bracelet of Ios",
    },
    "Root-Strangled Marshes": {
        component: "Gum",
        artifact: "Void Gate",
        treasure: "Shimmering Moonlace",
    },
    "Glassrock Canyon": {
        component: "Silica",
        artifact: "Golden Chassis",
        treasure: "Scale of the Infinity Wurm",
    },
    "Ruined City of the Ancient": {
        component: "Wax",
        artifact: "Scrying Lens",
        treasure: "The Ancient Record",
    },
    "The Fiery Maw": {
        component: "Lead",
        artifact: "Crystal Battery",
        treasure: "The Molten Shard",
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
};

export default reducer;
