import React from 'react';
import { connect } from 'react-redux';

import Dices from "../Dices/Dices";
import classes from "./Instructions.module.css";
import Table from "../../containers/Table/Table";


const instructions = (props) => {
    return (
        <div className={classes.Instructions}>
            <h1>Utopia Engine</h1>
            <h2 style={{ color: props.color }}>{props.title}</h2>
            {props.title === 'Map' ? null :<Table name={props.title}/>}
            <Dices />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        title: state.instructions.title,
        color: state.instructions.color,
        tables: state.tables,
    };
};

export default connect(mapStateToProps)(instructions);
