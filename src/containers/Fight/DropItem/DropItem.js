import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from '../../../components/UI/Button/Button';
import Dice from '../../../components/Dices/Dice/Dice';
import * as actions from '../../../store/actions';
import classes from './DropItem.module.css';
import { getRandomDice } from '../../../shared/utility';


class DropItem extends Component {
    state = {dice: null};

    goBack = (component = false) => {
        if (component) {
            this.props.addComponent(this.props.id);
        }

        this.props.history.push('/search');
    };

    goMap = (component = false) => {
        if (component) {
            this.props.addComponent(this.props.id);
        }
        this.props.history.push('/');
    };

    render() {
        let button;
        let message;

        if (this.state.dice === null) {
            button = <Button onClick={() => this.setState({...this.state, dice: getRandomDice()})}>Lancer</Button>;
            message = 'Découvrez si le monster à laisser tomber un objet.';
        } else if (this.state.dice <= this.props.level) {
            message = 'Le monstre a laissé tomber un composant !';
            button =
                <div>
                    <Button onClick={() => this.goBack(true)} style={{margin: 10}}>Récupérer et repartir</Button>
                    <Button onClick={() => this.goMap(true)} style={{margin: 10}}>Récupérer et changer de zone</Button>
                </div>;
        } else {
            message = 'Le monstre n\'a laissé pas tomber de composant.';
            button =
                <div>
                    <Button onClick={this.goBack} style={{margin: 10}}>Repartir</Button>
                    <Button onClick={this.goMap} style={{margin: 10}}>Changer de zone</Button>
                </div>;
        }

        return (
            <div className={classes.DropItem}>
                <p>Vous avez battu le monster.</p>
                <p>{message}</p>
                <div>
                    <Dice style={{margin: 'auto', marginBottom: 15}} value={this.state.dice}/>
                </div>
                {button}
            </div>
        );
    };
}

const mapDispatchToPros = (dispatch) => {
    return {
        addComponent: (id) => dispatch(actions.addComponent(id)),
    };
};

export default connect(null, mapDispatchToPros)(withRouter(DropItem));
