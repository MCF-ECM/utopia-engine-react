import React from 'react';

import Map from '../../Map/Map';
import classes from './Background.module.css';


const background = (props) => {
    let window = <Map />;

    if (props.title !== 'Map') {
        window =
            <div
                className={classes.Window}
                style={{backgroundImage: `url("/images/${props.title}.png")`}}
            />
        ;
    }

    return (
        <div className={classes.Background}>
            {window}
            <div className={classes.Instructions}>
                <h1>Utopia Engine</h1>
                {props.children}
            </div>
        </div>
    );
}

export default background;