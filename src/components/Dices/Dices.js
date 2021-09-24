import React from 'react';
import { connect } from 'react-redux';

import Button from '../UI/Button/Button';
import Dice from "./Dice/Dice";
import classes from "./Dices.module.css";
import * as actionTypes from "../../store/actions/actionTypes";


const dices = (props) => {
    const button = props.quantity > 0 ?
        <div className={classes.Button}>
            <Button onClick={() => props.roll()}>Lancer</Button>
        </div> :
        null
    ;

    return (
        <div>
            <div className={classes.Dices}>
                {props.dices.map((value, index) => <Dice key={index} value={value} />)}
            </div>
            {button}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        quantity: state.dices.quantity,
        dices: state.dices.dices,
    };
}

const mapDispatchToPros = (dispatch) => {
    return {
        roll: () => dispatch({type: actionTypes.ROLL_DICE}),
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(dices);
