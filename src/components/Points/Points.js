import React from 'react';
import { connect } from 'react-redux';

import classes from "./Points.module.css";


const points = (props) => {
    const total = props.table[0] * 100 + props.table[1] * 10 + props.table[2]
        - (props.table[3] * 100 + props.table[4] * 10 + props.table[5]);

    let text;

    if (total > 99 || total < 0) {
        text = `Vous avez attiré un monstre !`;
    } else if (total === 0) {
        text = `Vous avez trouvé un artéfact activé : ${props.inventory[props.region].artifact} !`;
    } else if (total < 11) {
        text = `Vous avez trouvé un artéfact inactivé : ${props.inventory[props.region].artifact} !`;
    } else {
        text = `Vous avez trouvé un composant : ${props.inventory[props.region].component} !`;
    }

    return (
        <div className={classes.Points}>
            Points : {total}
            <p>{text}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inventory: state.inventory,
    };
}

export default connect(mapStateToProps)(points);
