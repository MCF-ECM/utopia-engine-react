import React from 'react';

import classes from "./Dice.module.css";


const dice = (props) => {
    return (
        <span className={classes.Dice}>{props.value}</span>
    );
}

export default dice;
