import React from 'react';
import { connect } from 'react-redux';

import Background from '../UI/Background/Background';
import Dices from '../Dices/Dices';
import DropItem from '../../containers/DropItem/DropItem';
import * as actions from '../../store/actions/index';


const fight = (props) => {
    if (props.monster === "") {
        props.history.push("/");
    }

    let win = false;

    if (!props.dices.includes(null)) {
        props.dices.forEach(value => {
            if (props.level === 1) {
                if (value === 1) {
                    props.damage();
                } else if (value > 4) {
                    win = true;
                }
            } else {
                if (value < props.level) {
                    props.damage();
                } else if (value === 6) {
                    win = true;
                }
            }
        });
    }

    return (
        <Background>
            <h2 style={{ color: props.color }}>{props.monster} (niveau {props.level})</h2>
            <Dices reset={!win} />
            {win ? <DropItem level={props.level} /> : null}
        </Background>
    );
};

const mapStateToProps = (state) => {
    return {
        color: state.regions.color,
        level: state.regions.level,
        monster: state.regions.monster,
        dices: state.dices.dices,
    };
};

const mapDispatchToPros = (dispatch) => {
    return {
        damage: () => dispatch(actions.damage()),
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(fight);
