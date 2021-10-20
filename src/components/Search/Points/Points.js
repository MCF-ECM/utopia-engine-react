import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from '../../UI/Button/Button';
import * as actions from '../../../store/actions';
import classes from './Points.module.css';
import { diff } from '../../../shared/utility';


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
    };

    const addArtifact = (state) => {
        props.addArtifact(props.id, state);
        props.history.push('/');
    };

    const addComponent = () => {
        props.addComponent(props.id);
        props.goBack();
    };

    const addComponentMap = () => {
        props.addComponent(props.id);
        props.history.push('/');
    };

    const total = diff(props.table);

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
        button = <Button onClick={() => addArtifact("activé")}>Récupérer</Button>;
    } else if (total < 11) {
        text = `Vous avez trouvé un artéfact inactivé !`;
        button = <Button onClick={() => addArtifact("inactivé")}>Récupérer</Button>;
    } else {
        text = `Vous avez trouvé un composant !`;
        button =
            <div>
                <Button onClick={addComponent} style={{margin: 10}}>Récupérer et contiuner</Button>
                <Button onClick={addComponentMap} style={{margin: 10}}>Récupérer et changer de zone</Button>
            </div>;
    }

    return (
        <div className={classes.Points}>
            Points : {total}
            <p>{text}</p>
            {button}
        </div>
    );
};

const mapDispatchToPros = (dispatch) => {
    return {
        updateMonster: (level, monster) => dispatch(actions.updateMonster(level, monster)),
        addArtifact: (id, state) => dispatch(actions.addArtifact(id, state)),
        addComponent: (id) => dispatch(actions.addComponent(id)),
    };
};

export default connect(null, mapDispatchToPros)(withRouter(points));
