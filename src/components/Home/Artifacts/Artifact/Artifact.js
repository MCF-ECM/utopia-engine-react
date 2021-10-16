import React from 'react';

import classes from './Artifact.module.css';


const artifact = (props) => {
    return (
        <span className={classes.Artifact}>
            <img className={props.state === "inactivé" ? classes.Unactivated : null} src={`/images/undefined.png`} alt={props.artifact}/>
            <div className={classes.Label} style={{ borderColor: props.color, color: props.color }}>
                <h3>{props.artifact}</h3>
                ({props.state === null ? 'non trouvé' : props.state})
            </div>
        </span>
    );
};

export default artifact;
