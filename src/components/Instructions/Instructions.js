import React from 'react';
import { connect } from 'react-redux';

import classes from "./Instructions.module.css";


const instructions = (props) => {
    return (
        <div className={classes.Instructions}>
            <h1>Utopia Engine</h1>
            <h2 style={{ color: props.color }}>{props.title}</h2>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        title: state.instructions.title,
        color: state.instructions.color,
    };
}

export default connect(mapStateToProps)(instructions);