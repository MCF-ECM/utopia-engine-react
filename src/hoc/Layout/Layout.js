import React, { Component } from 'react';

import Instructions from "../../components/Instructions/Instructions";
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <div className={classes.Window}>
                    <main>
                        {this.props.children}
                    </main>
                </div>
                <Instructions />
            </div>
        );
    }
}

export default Layout;