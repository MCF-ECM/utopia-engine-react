import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import classes from './GameOver.module.css';
import * as actions from '../../../store/actions';


const gameOver = (props) => {
    return (
        <Modal show={props.pv < 0} title={"Game Over"}>
            <h1 className={classes.GameOver}>Game Over</h1>
            <Button
                onClick={props.gameOver}
                style={{display: 'block', margin: 'auto', fontSize: '1.5vw'}}
            >
                Rejouer
            </Button>
        </Modal>
    );
};

const mapStateToProps = (state) => {
    return {
        pv: state.life.pv,
    };
};

const mapDispatchToPros = (dispatch) => {
    return {
        gameOver: () => dispatch(actions.gameOver()),
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(gameOver);
