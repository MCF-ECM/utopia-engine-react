import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../../store/actions';
import classes from './Artifact.module.css';


const artifact = (props) => {
    const open = () => {
        props.updateArtifact(props.id, props.artifact, props.color);
        props.history.push('/activation');
    };

    return (
        <span className={classes.Artifact}>
            <img
                className={props.state === "inactivé" ? classes.Unactivated : null}
                onClick={props.state === "inactivé" ? open : () => {}}
                src={`/images/undefined.png`} alt={props.artifact}
            />
            <div className={classes.Label} style={{ borderColor: props.color, color: props.color }}>
                <h3>{props.artifact}</h3>
                ({props.state === null ? 'non trouvé' : props.state})
            </div>
        </span>
    );
};

const mapDispatchToPros = (dispatch) => {
    return {
        updateArtifact: (id, artifact, color) => dispatch(actions.updateArtifact(id, artifact, color)),
    };
};

export default connect(null, mapDispatchToPros)(withRouter(artifact));
