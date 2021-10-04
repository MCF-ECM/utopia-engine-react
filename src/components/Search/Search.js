import React from 'react';
import { connect } from 'react-redux';

import Background from '../UI/Background/Background';
import Table from '../../containers/Table/Table';


const search = (props) => {
    return (
        <Background title={props.region}>
            {props.region === 'Map'
                ? null
                :
                    <div>
                        <h2 style={{ color: props.color }}>{props.region}</h2>
                        <Table region={props.region}/>
                    </div>
            }
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
