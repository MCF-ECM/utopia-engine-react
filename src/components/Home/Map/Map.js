import React from 'react';

import Pin from '../../UI/Pin/Pin';
import classes from './Map.module.css';


const STYLES = [
    classes.Peak,
    classes.Wilds,
    classes.Root,
    classes.Canyon,
    classes.Ruined,
    classes.Maw,
];

const ZONES = [
    { name: "Halebeard Peak", color: "#808080" },
    { name: "The Great Wilds", color: "#556B2F" },
    { name: "Root-Strangled Marshes", color: "#FFB833" },
    { name: "Glassrock Canyon", color: "#FFFF66" },
    { name: "Ruined City of the Ancient", color: "#008080" },
    { name: "The Fiery Maw", color: "#CC8500" }
];

const map = () => {
    return (
        <div
            className={classes.Map}
            style={{backgroundImage: `url("/images/map.png")`}}
        >
            {ZONES.map((zone, index) =>
                <span className={STYLES[index]} key={index}>
                    <Pin id={index} region={zone.name} color={zone.color} />
                </span>
            )}
        </div>
    );
};

export default map;
