import React from 'react';

import Button from '../../components/UI/Button/Button';
import classes from './ActivationTable.module.css';


const activationTable = (props) => {
    return (
        <div className={classes.Bloc}>
            <div>
                <div className={classes.Table}>
                    {props.table.map((value, i) => value ?
                        <div key={i} className={classes.Value}>{value}</div> :
                        <div key={i} className={classes.Cell} onClick={() => props.update(i)}>
                            {value}
                        </div>
                    )}
                </div>
                <div className={classes.Results}>
                    {props.results.map((result, i) => <div key={i} className={classes.Result}>{result}</div>)}
                </div>
            </div>
            <div className={classes.Buttons}>
                <Button
                    style={{ backgroundColor: 'red' }}
                    onClick={props.reset}
                    disabled={!props.canReset}
                >
                    Effacer
                </Button>
                <Button onClick={props.save} disabled={!props.canSave}>
                    Sauvegarder
                </Button>
            </div>
        </div>
    );
};

export default activationTable;
