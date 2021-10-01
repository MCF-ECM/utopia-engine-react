import React from 'react';
import { connect } from 'react-redux';

import Background from '../UI/Background/Background';
import Table from '../../containers/Table/Table';


const search = (props) => {
    return (
        <Background title={props.title}>
            {props.title === 'Map'
                ? null
                :
                    <div>
                        <h2 style={{ color: props.color }}>{props.title}</h2>
                        <Table region={props.title}/>
                    </div>
            }
        </Background>
    );
};

const mapStateToProps = (state) => {
    return {
        title: state.instructions.title,
        color: state.instructions.color,
        tables: state.tables,
    };
};

export default connect(mapStateToProps)(search);
