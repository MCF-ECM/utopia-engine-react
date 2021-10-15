import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from '../UI/Button/Button';
import * as actions from '../../store/actions/index';
import classes from './Points.module.css';


const points = (props) => {
    const metMonster = (level) => {
        fetch(`/api/monster?id=${props.id}&level=${level}`)
            .then((res) => res.json())
            .then(
                (result) => {
                    props.updateMonster(level, result.monster);
                    props.history.push('/fight');
                },
                (err) => {console.log(err)}
            );
    }

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
        button = <Button onClick={() => metMonster(level)}>Combattre</Button>;
    } else if (total === 0) {
        text = `Vous avez trouvé un artéfact activé !`;
        button = <Button>Récupérer l'artifact activé</Button>;
    } else if (total < 11) {
        text = `Vous avez trouvé un artéfact inactivé !`;
        button =
            <Button>Récupérer l'artifact inactivé</Button>;
    } else {
        text = `Vous avez trouvé un composant !`;
        button = <Button>Récupérer le component</Button>;
    }

    return (
        <div className={classes.Points}>
            Points : {total}
            <p>{text}</p>
            {button}
        </div>
    );
}

const mapDispatchToPros = (dispatch) => {
    return {
        updateMonster: (level, monster) => dispatch(actions.updateMonster(level, monster)),
    };
};

export default connect(null, mapDispatchToPros)(withRouter(points));
