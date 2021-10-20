import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Background from '../../components/UI/Background/Background';
import Button from '../../components/UI/Button/Button';
import Dices from '../../components/Dices/Dices';
import DropItem from './DropItem/DropItem';
import Help from '../../components/UI/Help/Help';
import * as actions from '../../store/actions';
import classes from './Fight.module.css';
import { getRandomDice } from '../../shared/utility';


class Fight extends Component {
    state = {
        win: false,
        dices: [null, null],
     };

    roll = () => {
        const dices = [null, null];
        let win = false;

        for (let i = 0; i < 2; i++) {
            dices[i] = getRandomDice();

            if (this.props.level === 1) {
                if (dices[i] === 1) {
                    this.props.damage();
                } else if (dices[i] > 4) {
                    win = true;
                }
            } else {
                if (dices[i] < this.props.level) {
                    this.props.damage();
                } else if (dices[i] === 6) {
                    win = true;
                }
            }
        }

        this.setState({...this.state, win: win, dices: dices});
    };

    render() {
        let redirect = null;
        let next = null;
        let winCondition, hitCondition;

        if (this.props.monster === "") {
            redirect = <Redirect to="/search" />;
        }

        if (this.props.pv === 0) {
            next =
                <div className={classes.Faint}>
                    <p>Vous vous êtes évanoui et le monster est parti.</p>
                    <Button onClick={this.props.faint}>Se Reposer</Button>
                </div>
            ;
        } else if (this.state.win) {
            next = <DropItem id={this.props.id} level={this.props.level}/>;
        }

        if (this.props.level === 1) {
            hitCondition = '1';
            winCondition = '5 ou 6';
        } else {
            hitCondition = `moins de ${this.props.level}`;
            winCondition = '6';
        }

        return (
            <Background>
                {redirect}
                <Help color={this.props.color}>
                    Lancer les dés.<br/>
                    Pour chaque dé, si vous obtenez {hitCondition}, alors le monstre réussira à vous blesser et vous perdez un point de vie, et si vous obtenez {winCondition} alors vous ferez fuir le monstre.<br/>
                    <span style={{color: 'red'}}>Attention, dans le cas où les deux conditions mentionnées sont remplies, le monstre vous blessera avant de fuir.</span>
                </Help>
                <h2 style={{color: this.props.color}}>{this.props.monster} (niveau {this.props.level})</h2>
                <Dices
                    dices={this.state.dices}
                    roll={this.roll}
                    reset={!this.state.win && this.props.pv !== 0}
                />
                {next}
            </Background>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.region.id,
        color: state.region.color,
        level: state.region.level,
        monster: state.region.monster,
        pv: state.life.pv,
    };
};

const mapDispatchToPros = (dispatch) => {
    return {
        damage: () => dispatch(actions.damage()),
        faint: () => dispatch(actions.faint()),
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(Fight);
