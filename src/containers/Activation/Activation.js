import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ActivationTable from '../../components/ActivationTable/ActivationTable';
import Background from '../../components/UI/Background/Background';
import Button from '../../components/UI/Button/Button';
import Dices from '../../components/Dices/Dices';
import Help from '../../components/UI/Help/Help';
import * as actions from '../../store/actions';
import classes from './Activation.module.css';
import { getRandomDice } from '../../shared/utility';


class Activation extends Component {
    state = {
        table: [null, null, null, null, null, null, null, null],
        tables: [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
        ],
        changed: false,
        dices: [null, null],
        position: -1,
        results: [
            [null, null, null, null],
            [null, null, null, null],
        ],
        tentative: 0,
     };

    roll = () => {
        const dices = [getRandomDice(), getRandomDice()];

        this.setState({...this.state, dices: dices, position: 0});
    };

    updateValue = (index) => {
        let table = [...this.state.table];
        let position = this.state.position;
        let changed = this.state.changed;

        if (this.state.position >= 0 && this.state.position < 2) {
            if (!this.state.changed) {
                table = [...this.state.tables[this.state.tentative]];
            }

            table[index] = this.state.dices[this.state.position];
            changed = true;
            position++;

            for(let i = 0; i < 4; i++) {
                if (table[i] !== null && table[i] === table[i + 4]) {
                    table[i] = null;
                    table[i + 4] = null;
                }
            }
        }

        this.setState({
            ...this.state,
            table: table,
            changed: changed,
            position: position,
        });
    };

    save = () => {
        let tentative = this.state.tentative;
        let table = [...this.state.table];
        const tables = [...this.state.tables];
        const results = [...this.state.results];

        tables[this.state.tentative] = table;

        for(let i = 0; i < 4; i++) {
            if (results[this.state.tentative][i] === null) {
                if (table[i] !== null && table[i + 4] !== null) {
                    results[this.state.tentative][i] = table[i] - table[i + 4];

                    if (results[this.state.tentative][i] < 0) {
                        this.props.damage();
                    }
                }
            }
        }

        if (!tables[tentative].includes(null)) {
            tentative += 1;
            table = [null, null, null, null, null, null, null, null];
        }

        this.setState({
            ...this.state,
            table: table,
            tables: tables,
            dices: [null, null],
            position: -1,
            tentative: tentative,
            results: results,
        });
    };

    reset = () => this.setState({
        ...this.state,
        table: [...this.state.tables[this.state.tentative]],
        changed: false,
        position: 0,
    });

    render() {
        let redirect = null;
        let rest = null;

        if (this.props.id === -1) {
            redirect = <Redirect to="/" />;
        }

        if (this.props.pv === 0) {
            rest =
                <div className={classes.Faint}>
                    <p>Vous vous êtes évanoui et le monster est parti.</p>
                    <Button onClick={this.props.faint}>Se Reposer</Button>
                </div>
            ;
        }

        return (
            <Background>
                {redirect}
                <Help color={this.props.color}>
                    Lancer les dés.<br/>
                </Help>
                <h2 style={{color: this.props.color}}>{this.props.artifact}</h2>
                <div style={{float: 'right'}}>{this.state.charge}</div>
                {this.state.tables.map((table, index) =>
                    <div>
                        {this.state.tentative === index
                            ?
                                <ActivationTable
                                    key={index}
                                    table={this.state.table}
                                    update={this.updateValue}
                                    results={this.state.results[index]}
                                    reset={this.reset}
                                    canReset={this.state.position > 0}
                                    save={this.save}
                                    canSave={this.state.position > 1}
                                />
                            :
                                <ActivationTable
                                    key={index}
                                    table={this.state.tables[index]}
                                    update={() => {}}
                                    results={this.state.results[index]}
                                    rest={() => {}}
                                    canReset={false}
                                    save={() => {}}
                                    canSave={false}
                                />
                        }
                        {this.state.tentative === index && this.props.pv > 0
                            ?
                                <Dices
                                    dices={this.state.dices}
                                    position={this.state.position}
                                    roll={this.roll}
                                />
                            : null
                        }
                    </div>
                )}
                {rest}
            </Background>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.region.id,
        color: state.region.color,
        pv: state.life.pv,
    };
};

const mapDispatchToPros = (dispatch) => {
    return {
        damage: () => dispatch(actions.damage()),
        faint: () => dispatch(actions.faint()),
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(Activation);
