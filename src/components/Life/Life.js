import React from 'react';
import { connect } from 'react-redux';

import classes from './Life.module.css';


const life = (props) => {
    const width = 20 * (6 - Math.max(0, props.pv));

    return (
        <div className={classes.Life}>
            <img src="/images/pv.jpg" alt="Barre de Vie" className={classes.PV}/>
            <div className={classes.Red} style={{width: width}}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        pv: state.life.pv,
    };
};

export default connect(mapStateToProps)(life);
