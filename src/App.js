import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Activation from './containers/Activation/Activation';
import Fight from './containers/Fight/Fight';
import GameOver from './components/GameOver/GameOver';
import Home from './components/Home/Home';
import Layout from './hoc/Layout/Layout';
import Search from './components/Search/Search';
import Win from './components/Win/Win';


class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/activation" exact component={Activation} />
                    <Route path="/fight" exact component={Fight} />
                    <Route path="/search" exact component={Search} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
                <GameOver />
                <Win />
            </Layout>
        );
    };
}

export default App;
