import React from 'react';

import Button from '../UI/Button/Button';
import Dice from './Dice/Dice';
import classes from './Dices.module.css';


const dices = (props) => {
    const button = (props.position === -1 || props.reset)
        ?
            <div className={classes.Button}>
                <Button onClick={() => props.roll()}>Lancer</Button>
            </div>
        : null
    ;

    return (
        <div className={classes.Dices}>
            {props.dices.map((value, index) => <Dice key={index} value={value} />)}
            {button}
        </div>
    );
}

export default dices;
