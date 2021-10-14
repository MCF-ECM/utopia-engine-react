import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Fight from './containers/Fight/Fight';
import GameOver from './components/GameOver/GameOver';
import Layout from './hoc/Layout/Layout';
import Search from './components/Search/Search';


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/fight" exact component={Fight} />
                    <Route path="/" exact component={Search} />
                    <Redirect to="/" />
                </Switch>
                <GameOver />
            </Layout>
        );
    };
}

export default App;
