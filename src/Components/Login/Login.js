import React, { Component } from 'react';
import classes from './Login.module.css';
import Logo from '../../Assets/netflix.svg';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { withErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

import Cookies from 'universal-cookie';

import axios from 'axios';

class Login extends Component {
  emailHandler(event) {
    this.props.dispatch({
      type: 'E_MAIL',
      payload: event.target.value,
    });
  }

  passwordHandler(event) {
    this.props.dispatch({
      type: 'PASSWORD',
      payload: event.target.value,
    });
  }

  performLogin(email, password) {
    const uri = 'https://neflickbackendtest.herokuapp.com/';
    axios
      .post(uri + 'users/login', {
        email: email,
        password: password,
      })
      .then(response => {
        if (response.headers['x-auth']) {
          const cookies = new Cookies();
          cookies.set('x-auth', response.headers['x-auth']);
          console.log('Authentication Successful');
        }
      })
      .then(() => {
        this.props.dispatch({
          type: 'VERIFIED',
          payload: true,
        });
      })
      .catch(error => {
        console.log(error);
        this.props.dispatch({
          type: 'DISPLAY_ERROR',
          payload: 'block',
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.verified ? <Redirect to="/" /> : null}
        <img src={Logo} alt="Logo" className={classes.Logo} />
        <div className={classes.Login}>
          <div className={classes.LoginBox}>
            <div className={classes.LoginForm}>
              <h1 style={{ margin: 0 }}>
                <b>Login</b>
              </h1>
              <button
                className={classes.ErrorButton}
                style={{ display: this.props.displayError }}
              >
                Incorrect UserName or Password
              </button>
              <input
                type="email"
                placeholder="E-Mail"
                onChange={event => this.emailHandler(event)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={event => this.passwordHandler(event)}
              />
              <button
                className={classes.LoginButton}
                onClick={() =>
                  this.performLogin(this.props.email, this.props.password)
                }
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className={classes.footerInfo}>
          <p>
            <b>Use 'test@test.com' as the E-Mail and 'test123' as Password</b>
          </p>
          <p>
            <b>New User Registration is currently Disabled.</b>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.Login.email,
    password: state.Login.password,
    verified: state.Login.verified,
    displayError: state.Login.displayError,
  };
};

export default connect(mapStateToProps)(Login);
