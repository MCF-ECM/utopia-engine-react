import React, { Component } from 'react';
import { connect } from "react-redux";

import Button from '../../components/UI/Button/Button';
import Dices from '../../components/Dices/Dices';
import Points from '../../components/Points/Points';
import * as actionTypes from "../../store/actions/actionTypes";
import classes from './Table.module.css';


class Table extends Component {
    state = {table: [...this.props.tables[this.props.region]]};

    updateValue = (index) => {
        let table = [...this.state.table];

        if (this.props.position >= 0 && this.props.position < this.props.quantity) {
            if (!this.props.tables.changed) {
                table = [...this.props.tables[this.props.region]];
            }

            table[index] = this.props.dices[this.props.position];
            this.props.changedTable(true);
            this.props.updatePosition();
        }

        this.setState({...this.state, table: table});
    };

    reset = () => {
        this.props.resetPosition();
        this.props.changedTable(false);
    }

    render() {
        let save = null;
        let reset = null;
        let table = this.state.table;
        let dice = null;
        let points = null;

        if (this.props.position === this.props.quantity) {
            save =
                <Button onClick={() => {
                    this.props.updateTables(this.props.region, this.state.table);
                    this.props.newDices(this.props.quantity);
                }}>
                    Sauvegarder
                </Button>
            ;
        }

        if (this.props.position > 0) {
            reset = <Button style={{ backgroundColor: 'red' }} onClick={this.reset}>Effacer</Button>;
        }

        if (!this.props.tables.changed) {
            table = [...this.props.tables[this.props.region]];
        }

        if (this.props.tables[this.props.region].includes(null)) {
            dice = <Dices />;
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
        dices: state.dices.dices,
        position: state.dices.current,
        quantity: state.dices.quantity,
    };
};

const mapDispatchToPros = (dispatch) => {
    return {
        changedTable: (changed) => dispatch({type: actionTypes.CHANGED_TABLE, changed: changed}),
        updateTables: (name, table) => dispatch({type: actionTypes.UPDATE_TABLE, name: name, table: table}),
        updatePosition: () => dispatch({type: actionTypes.UPDATE_POSITION_DICES}),
        resetPosition: () => dispatch({type: actionTypes.REST_POSITION_DICES}),
        newDices: (quantity) => dispatch({type: actionTypes.NEW_DICES, quantity: quantity}),
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(Table);
