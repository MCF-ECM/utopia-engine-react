import React from 'react';

import classes from './Pin.module.css';


const pin = (props) => {
    return (
        <span>
            <svg className={classes.Pin} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512" fill={props.color}>
                <path d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z" />
            </svg>
            <h3 className={classes.Label} style={{ borderColor: props.color, color: props.color }}>
                {props.title}
            </h3>
        </span>
    );
}

export default pin;