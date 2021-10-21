import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Background from '../../components/UI/Background/Background';
import Help from '../../components/UI/Help/Help';


class Activation extends Component {
    render() {
        let redirect = null;

        if (this.props.id === -1) {
            redirect = <Redirect to="/" />;
        }

        return (
            <Background>
                {redirect}
                <Help color={this.props.color}>
                    Lancer les dés.<br/>
                </Help>
            </Background>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        id: state.region.id,
        color: state.region.color,
    };
};

export default connect(mapStateToProps)(Activation);
