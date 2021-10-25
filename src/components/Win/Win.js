import React from 'react';
import { connect } from 'react-redux';

import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import classes from './Win.module.css';
import * as actions from '../../store/actions';


const win = (props) => {
    const activated = props.inventory
        .map(region => region.artifact.state === "activé" ? 1 : 0)
        .reduce((prev, current) => prev + current, 0)
    ;

    return (
        <Modal show={activated === 6} title={"Victoire"}>
            <h1 className={classes.Win}>Vous avez activé les cinq artéfacts de l'Utopia Engine et arrêter la fin du monde.</h1>
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
        inventory: state.inventory,
    };
};

const mapDispatchToPros = (dispatch) => {
    return {
        gameOver: () => dispatch(actions.gameOver()),
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(win);
