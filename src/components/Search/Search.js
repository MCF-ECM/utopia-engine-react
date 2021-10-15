import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Background from '../UI/Background/Background';
import Table from '../../containers/Table/Table';


const search = (props) => {
    let redirect = null;

    if (props.region === "") {
        redirect = <Redirect to="/" />;
    }

    return (
        <Background title={props.name}>
            {redirect}
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
