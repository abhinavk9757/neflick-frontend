import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import ToolBar from './Components/ToolBar/ToolBar';
import SearchResults from './Components/SearchResults/SearchResults';
import BillBoard from './Components/BillBoard/BillBoard';
import BillBoardText from './Components/BillBoardText/BillBoardText';
import Login from './Components/Login/Login';

import classes from './App.module.css';

class App extends Component {
  constructor() {
    super();
    const cookies = new Cookies();
    const xAuth = cookies.get('x-auth');
    this.state = { authorized: null };
    if (xAuth) {
      axios
        .get('https://neflickbackendtest.herokuapp.com/users/me', {
          headers: { 'x-auth': xAuth },
        })
        .then(response => {
          this.setState({
            authorized: 'true',
          });
        })
        .catch(() => {
          console.log('UnAuthorized');
          this.setState({
            authorized: 'false',
          });
        });
    }
  }

  browseComponent = () => (
    <React.Fragment>
      {this.state.authorized === 'false' ? <Redirect to="/" /> : null}
      <div className={classes.backgroundBlack} />
      <ToolBar />

      <BillBoard />
      <BillBoardText />

      <div className={classes.content}>
        <SearchResults />
        <SearchResults />
        <SearchResults />
      </div>
    </React.Fragment>
  );

  loginComponent = () => (
    <React.Fragment>
      <Login />
      {this.state.authorized === 'true' ? <Redirect to="/" /> : null}
    </React.Fragment>
  );

  rootComponent = () => {
    return (
      <div>
        {this.state.authorized === 'true' ? <Redirect to="/browse" /> : null}
        {this.state.authorized === 'false' ? <Redirect to="/login" /> : null}
      </div>
    );
  };

  componentDidMount = () => {
    if (!this.xAuth) {
      this.setState({
        authorized: 'false',
      });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={this.rootComponent} />
            <Route exact path="/browse" component={this.browseComponent} />
            <Route exact path="/login" component={this.loginComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
