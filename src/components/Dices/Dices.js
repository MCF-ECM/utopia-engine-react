import React from 'react';

import Button from '../UI/Button/Button';
import Dice from './Dice/Dice';
import classes from './Dices.module.css';


const dices = (props) => {
    return (
        <div>
            <div className={classes.Dices}>
                {props.dices.map((value, index) => <Dice key={index} value={value} />)}
            </div>
            <div className={classes.Button}>
                <Button onClick={() => props.roll()} disabled={props.position !== -1 && !props.reset}>
                    Lancer
                </Button>
            </div>
        </div>
    );
}

export default dices;
