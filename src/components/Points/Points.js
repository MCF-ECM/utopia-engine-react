import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from '../UI/Button/Button';
import * as actions from '../../store/actions/index';
import classes from './Points.module.css';


const points = (props) => {
    const total = props.table[0] * 100 + props.table[1] * 10 + props.table[2]
        - (props.table[3] * 100 + props.table[4] * 10 + props.table[5]);

    let text, button;

    if (total > 99 || total < 0) {
        let level;

        if (total < -400 || total > 499) {
            level = 5;
        } else if (total < -300 || total > 399) {
            level = 4;
        } else if (total < -200 || total > 299) {
            level = 3;
        } else if (total < -100 || total > 199) {
            level = 2;
        } else {
            level = 1;
        }

        text = `Vous avez attiré un monstre !`;
        button = <Button onClick={props.history.push('/fight')}>Combattre</Button>;

        props.updateMonster(level);
    } else if (total === 0) {
        text = `Vous avez trouvé un artéfact activé : ${props.inventory[props.region].artifact} !`;
        button = <Button>Récupérer {props.inventory[props.region].artifact} activé</Button>;
    } else if (total < 11) {
        text = `Vous avez trouvé un artéfact inactivé : ${props.inventory[props.region].artifact} !`;
        button =
            <Button>Récupérer {props.inventory[props.region].artifact} inactivé</Button>;
    } else {
        text = `Vous avez trouvé un composant : ${props.inventory[props.region].component} !`;
        button = <Button>Récupérer {props.inventory[props.region].component}</Button>;
    }

    return (
        <div className={classes.Points}>
            Points : {total}
            <p>{text}</p>
            {button}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inventory: state.regions,
    };
};

const mapDispatchToPros = (dispatch) => {
    return {
        updateMonster: (level) => dispatch(actions.updateMonster(level)),
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(withRouter(points));
