import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../../store/actions';
import classes from './Pin.module.css';


const pin = (props) => {
    const changeRegion = (id, region, color) => {
        props.updateRegion(id, region, color);
        props.history.push('/search');
    };

    return (
        <span onClick={() => changeRegion(props.id, props.region, props.color)}>
            <svg className={classes.Pin} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512" fill={props.color}>
                <path d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z" />
            </svg>
            <h3 className={classes.Label} style={{ borderColor: props.color, color: props.color }}>
                {props.region}
            </h3>
        </span>
    );
};

const mapDispatchToPros = (dispatch) => {
    return {
        updateRegion: (id, region, color) => dispatch(actions.updateRegion(id, region, color)),
    };
};

export default connect(null, mapDispatchToPros)(withRouter(pin));
