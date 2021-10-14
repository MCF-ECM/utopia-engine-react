import React, { Component } from 'react';
import { connect } from "react-redux";

import Button from '../../components/UI/Button/Button';
import Dices from '../../components/Dices/Dices';
import Points from '../../components/Points/Points';
import * as actions from '../../store/actions/index';
import classes from './Table.module.css';
import { getRandomDice } from '../../shared/utility';


class Table extends Component {
    state = {
        table: [...this.props.tables[this.props.region]],
        dices: [null, null],
        position: -1,
    };

    roll = () => {
        const dices = [null, null];

        for (let i = 0; i < 2; i++) {
            dices[i] = getRandomDice();
        }

        this.setState({...this.state, dices: dices, position: 0});
    }

    updateValue = (index) => {
        let table = [...this.state.table];
        let position = this.state.position;

        if (this.state.position >= 0 && this.state.position < 2) {
            if (!this.props.tables.changed) {
                table = [...this.props.tables[this.props.region]];
            }

            table[index] = this.state.dices[this.state.position];
            this.props.changedTable(true);
            position += 1;
        }

        this.setState({...this.state, table: table, position: position});
    };

    save = () => {
        this.props.updateTables(this.props.region, this.state.table);
        this.setState({
            dices: [null, null],
            position: -1,
        });
    };

    reset = () => {
        this.props.changedTable(false);
        this.setState({...this.state, position: 0});
    };

    render() {
        let save = null;
        let reset = null;
        let table = this.state.table;
        let dice = null;
        let points = null;

        if (this.state.position > 1) {
            save = <Button onClick={this.save}>Sauvegarder</Button>;
        }

        if (this.state.position > 0) {
            reset = <Button style={{ backgroundColor: 'red' }} onClick={this.reset}>Effacer</Button>;
        }

        if (!this.props.tables.changed) {
            table = [...this.props.tables[this.props.region]];
        }

        if (this.props.tables[this.props.region].includes(null)) {
            dice =
                <Dices
                    dices={this.state.dices}
                    position={this.state.position}
                    roll={this.roll}
                />
            ;
        } else {
            points = <Points table={table} region={this.props.region} />;
        }

        return (
            <div>
                <div className={classes.Bloc}>
                    <div className={classes.Table}>
                        {table.map((value, index) => value ?
                            <div key={index} className={classes.Value}>{value}</div> :
                            <div key={index} className={classes.Cell} onClick={() => this.updateValue(index)}>{value}</div>
                        )}
                    </div>
                    <div className={classes.Buttons}>
                        {reset}
                        {save}
                        {points}
                    </div>
                </div>
                {dice}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tables: state.tables,
    };
};

const mapDispatchToPros = (dispatch) => {
    return {
        changedTable: (changed) => dispatch(actions.changedTable(changed)),
        updateTables: (name, table) => dispatch(actions.updateTable(name, table)),
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(Table);
