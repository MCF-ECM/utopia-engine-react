import React from 'react';

import classes from "./Dice.module.css";


const dice = (props) => {
    return (
        <span className={classes.Dice} style={props.style}>{props.value}</span>
    );
}

export default dice;
