import React, { Component } from 'react';
import {Container, } from 'semantic-ui-react';
import { Route, Switch, } from "react-router-dom";
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Categories from './components/Categories';
import Category from './components/Category';
import Card from './components/Card';
import { AppContainer, AppColor } from './styles/AppStyle.js';

class App extends Component {
  render() {
    return (
      <AppColor>
        <AppContainer>
            <NavBar />
            <Switch>
              <Route exact path = '/' component = {Home} />
              <Route exact path = '/categories' component = {Categories} />
              <Route component = {NoMatch} />
            </Switch>
        </AppContainer>
      </AppColor>
    );
  }
}

export default App;