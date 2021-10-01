import React from 'react';

import Pin from './Pin/Pin';
import classes from './Map.module.css';


const map = () => {
    return (
        <div
            className={classes.Map}
            style={{backgroundImage: `url("/images/map.png")`}}
        >
            <span className={classes.Peak}>
                <Pin
                    title="Halebeard Peak"
                    color="#808080"
                />
            </span>
            <span className={classes.Wilds}>
                <Pin
                    title="The Great Wilds"
                    color="#556B2F"
                />
            </span>
            <span className={classes.Root}>
                <Pin
                    title="Root-Strangled Marshes"
                    color="#FFB833"
                />
            </span>
            <span className={classes.Canyon}>
                <Pin
                    title="Glassrock Canyon"
                    color="#FFFF66"
                />
            </span>
            <span className={classes.Ruined}>
                <Pin
                    title="Ruined City of the Ancient"
                    color="#008080"
                />
            </span>
            <span className={classes.Maw}>
                <Pin
                    title="The Fiery Maw"
                    color="#CC8500"
                />
            </span>
        </div>
    );
}

export default map;