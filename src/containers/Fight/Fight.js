import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Background from '../../components/UI/Background/Background';
import Button from '../../components/UI/Button/Button';
import Dices from '../../components/Dices/Dices';
import DropItem from './DropItem/DropItem';
import * as actions from '../../store/actions';
import { getRandomDice } from '../../shared/utility';


class Fight extends Component {
    state = {win: false, dices: [null, null]}

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
    }

    render() {
        let redirect = null;
        let next = null;

        if (this.props.monster === "") {
            redirect = <Redirect to="/search" />;
        }

        if (this.props.pv === 0) {
            next =
                <div>
                    <p>Vous vous êtes évanoui et le monster est parti.</p>
                    <Button>Se Reposer</Button>
                </div>
            ;
        } else if (this.state.win) {
            next = <DropItem level={this.props.level}/>;
        }

        return (
            <Background>
                {redirect}
                <h2 style={{color: this.props.color}}>{this.props.monster} (niveau {this.props.level})</h2>
                <Dices
                    dices={this.state.dices}
                    roll={this.roll}
                    reset={!this.state.win}
                />
                {next}
            </Background>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        color: state.regions.color,
        level: state.regions.level,
        monster: state.regions.monster,
        pv: state.life.pv,
    };
};

const mapDispatchToPros = (dispatch) => {
    return {
        damage: () => dispatch(actions.damage()),
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(Fight);
