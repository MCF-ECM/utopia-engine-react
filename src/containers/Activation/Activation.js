import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Background from '../../components/UI/Background/Background';
import Button from '../../components/UI/Button/Button';
import Dices from '../../components/Dices/Dices';
import Help from '../../components/UI/Help/Help';
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
            position += 1;
        }

        this.setState({
            ...this.state,
            table: table,
            changed: changed,
            position: position,
            results: this.updateResults(table),
        });
    };

    updateResults = (table) => {
        const results = [...this.state.results];

        for(let i = 0; i < 4; i++) {
            if (table[i] !== null && table[i + 4] !== null) {
                if (table[i] === table[i + 4]) {
                    table[i] = null;
                    table[i + 4] =null;
                } else {
                    results[this.state.tentative][i] = table[i] - table[i + 4];
                }
            } else {
                results[this.state.tentative][i] = null;
            }
        }

        return results;
    };

    save = () => {
        let tables = [...this.state.tables];
        let tentative = this.state.tentative;
        let table = [...this.state.table];

        tables[this.state.tentative] = table;

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
        });
    };

    reset = () => {
        const table = [...this.state.tables[this.state.tentative]];

        this.setState({
            ...this.state,
            table: table,
            changed: false,
            position: 0,
            results: this.updateResults(table),
        });
    };

    render() {
        let redirect = null;

        if (this.props.id === -1) {
            redirect = <Redirect to="/" />;
        }

        return (
            <Background>
                {redirect}
                <Help color={this.props.color}>
                    Lancer les dés.<br/>
                </Help>
                <h2 style={{color: this.props.color}}>{this.props.artifact}</h2>
                {this.state.tables.map((table, index) =>
                    <div  key={`table${index}`}>
                        <div className={classes.Bloc}>
                            <div>
                                <div className={classes.Table}>
                                    {this.state.tentative === index
                                        ?
                                            this.state.table.map((value, i) => value ?
                                                <div key={i} className={classes.Value}>{value}</div> :
                                                <div key={i} className={classes.Cell} onClick={() => this.updateValue(i)}>
                                                    {value}
                                                </div>
                                            )
                                        :
                                            table.map((value, i) => value ?
                                            <div key={i} className={classes.Value}>{value}</div> :
                                            <div key={i} className={classes.Cell} onClick={() => this.updateValue(i)}>
                                                {value}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className={classes.Results}>
                                    {this.state.results[index].map((result, i) =>
                                        <div key={i} className={classes.Result}>{result}</div>
                                    )}
                                </div>
                            </div>
                            <div className={classes.Buttons}>
                                <Button
                                    style={{ backgroundColor: 'red' }}
                                    onClick={this.reset}
                                    disabled={this.state.position < 1 || this.state.tentative !== index}
                                >
                                    Effacer
                                </Button>
                                <Button onClick={this.save} disabled={this.state.position < 2 || this.state.tentative !== index}>
                                    Sauvegarder
                                </Button>
                            </div>
                        </div>
                        {this.state.tentative === index && this.state.tentative !== 2
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
            </Background>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.region.id,
        color: state.region.color,
    };
};

export default connect(mapStateToProps)(Activation);
