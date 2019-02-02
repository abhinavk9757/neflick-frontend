import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToolBar from './Components/ToolBar/ToolBar';
import SearchResults from './Components/SearchResults/SearchResults';
import BillBoard from './Components/BillBoard/BillBoard';
import BillBoardText from './Components/BillBoardText/BillBoardText';
import Login from './Components/Login/Login';

import classes from './App.module.css';
import Cookies from 'universal-cookie';
import { authenticateToken } from './Authentication/Authentication';

class App extends Component {
  isAuthenticated = payload => {
    this.props.dispatch({
      type: 'VERIFIED',
      payload: payload,
    });
  };

  browseComponent = (
    <React.Fragment>
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

  loginComponent = (
    <Login isAuthenticated={payload => this.isAuthenticated(payload)} />
  );

  componentDidMount = () => {
    const cookies = new Cookies();
    let xAuth = cookies.get('x-auth');

    if (!xAuth) {
      this.isAuthenticated('false');
    } else if (this.props.verified === 'null') {
      authenticateToken(xAuth)
        .then(response => {
          this.isAuthenticated('true');
        })
        .catch(() => {
          cookies.remove('x-auth');
          this.isAuthenticated('false');
        });
    }
  };
  render = () => {
    if (this.props.verified === 'true') {
      return this.browseComponent;
    } else if (this.props.verified === 'false') {
      return this.loginComponent;
    } else {
      return null;
    }
  };
}
const mapStateToProps = state => {
  return {
    verified: state.App.verified,
  };
};
export default connect(mapStateToProps)(App);
