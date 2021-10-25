import React from 'react';

import classes from './Charge.module.css';


const charge = (props) => {
    const charge = [false, false, false, false];

    console.log(props.charge)

    for (let i = 0; i < props.charge && i < 4; i++) {
        charge[3 - i] = true;
    }

    return (
        <div className={classes.Charge}>
            Charge :
            <div className={classes.Table}>
                {charge.map((value, i) => value ?
                    <div key={i} className={classes.Activated} /> :
                    <div key={i} className={classes.Inactivated} />
                )}
            </div>
        </div>
    );
};

export default charge;
