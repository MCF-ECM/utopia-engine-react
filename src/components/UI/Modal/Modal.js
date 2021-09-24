import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';


const modal = (props) => (
    <div>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            <h3 className={classes.Header}>{props.title}</h3>
            <div className={classes.Body}>
                {props.children}
            </div>
        </div>
    </div>
);

export default modal;
