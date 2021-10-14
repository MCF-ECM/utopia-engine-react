import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Dice from '../../../components/Dices/Dice/Dice';
import classes from './DropItem.module.css';
import { getRandomDice } from '../../../shared/utility';


class DropItem extends Component {
    state = {dice: null};

    render() {
        let button;
        let message;

        if (this.state.dice === null) {
            button = <Button onClick={() => this.setState({...this.state, dice: getRandomDice()})}>Lancer</Button>;
            message = 'Découvrez si le monster à laisser tomber un objet.';
        } else if (this.state.dice <= this.props.level) {
            message = 'Le monstre a laissé tomber un composant !';
            button = <Button>Récupérer</Button>;
        } else {
            message = 'Le monstre n\'a laissé pas tomber de composant.';
            button = <Button>Repartir</Button>;
        }

        return (
            <div className={classes.DropItem}>
                <p>Vous avez battu le monster.</p>
                <p>{message}</p>
                <Dice style={{margin: 'auto', marginBottom: 15}} value={this.state.dice}/>
                {button}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        level: state.regions.level,
    };
};

export default connect(mapStateToProps)(DropItem);
