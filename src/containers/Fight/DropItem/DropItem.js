import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from '../../../components/UI/Button/Button';
import Dice from '../../../components/Dices/Dice/Dice';
import classes from './DropItem.module.css';
import { getRandomDice } from '../../../shared/utility';


class DropItem extends Component {
    state = {dice: null};

    goBack = () => this.props.history.push('/search');

    goMap = () => this.props.history.push('/');

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
            button =
                <div>
                    <Button onClick={this.goBack}>Repartir</Button>
                    <Button onClick={this.goMap} style={{margin: 10}}>Changer de zone</Button>
                </div>;
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
        level: state.region.level,
    };
};

export default connect(mapStateToProps)(withRouter(DropItem));
