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
        <Background title={props.region}>
            {redirect}
            <div>
                <h2 style={{ color: props.color }}>{props.region}</h2>
                <Table region={props.region}/>
            </div>
        </Background>
    );
};

const mapStateToProps = (state) => {
    return {
        region: state.regions.current,
        color: state.regions.color,
        tables: state.tables,
    };
};

export default connect(mapStateToProps)(search);
