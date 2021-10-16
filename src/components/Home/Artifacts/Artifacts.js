import React from 'react';
import { connect } from 'react-redux';

import Artifact from './Artifact/Artifact';
import classes from './Artifacts.module.css';


const POSITIONS = [
    classes.Balance,
    classes.Mirror,
    classes.Gate,
    classes.Chassis,
    classes.Lens,
    classes.Battery,
];

const artifacts = (props) => {
    return (
        <div className={classes.Table} style={{backgroundImage: `url("/images/table.jpg")`}}>
            {props.inventory.map((region, index) =>
                <span key={index} className={POSITIONS[index]}>
                    <Artifact
                        artifact={region.artifact.name}
                        color={region.color}
                        state={region.artifact.state}
                    />
                </span>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        inventory: state.inventory,
    };
};

export default connect(mapStateToProps)(artifacts);
