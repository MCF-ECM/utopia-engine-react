import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Background from '../UI/Background/Background';
import Help from '../UI/Help/Help';
import Table from '../../containers/Table/Table';


const search = (props) => {
    let redirect = null;

    if (props.name === "") {
        redirect = <Redirect to="/" />;
    }

    return (
        <Background title={props.name}>
            {redirect}
            <Help color={props.color}>
                Lancer les dés.<br/>
                Puis affecter les résultats obtenus dans la grille.<br/>
                Le but est d'obtenir le plus petit nombre positif en soustrant à la ligne du haut à celle du bas.<br/>
                <span style={{color: 'red'}}>Attention, si le nombre obtenu est trop grand ou négatif, alors vous attirerez un monster.</span>
            </Help>
            <div>
                <h2 style={{ color: props.color }}>{props.name}</h2>
                <Table id={props.id} region={props.name}/>
            </div>
        </Background>
    );
};

const mapStateToProps = (state) => {
    return {
        id: state.region.id,
        name: state.region.name,
        color: state.region.color,
        tables: state.tables,
    };
};

export default connect(mapStateToProps)(search);
