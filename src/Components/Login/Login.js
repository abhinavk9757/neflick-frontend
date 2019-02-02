import React, { Component } from 'react';
import classes from './Login.module.css';
import Logo from '../../Assets/netflix.svg';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { login } from '../../Authentication/Authentication';

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
    login(email, password)
      .then(response => {
        if (response.headers['x-auth']) {
          const cookies = new Cookies();
          cookies.set('x-auth', response.headers['x-auth']);
        }
      })
      .then(() => {
        this.props.isAuthenticated('true');
      })
      .catch(() => {
        this.props.dispatch({
          type: 'DISPLAY_ERROR',
          payload: 'block',
        });
      });
  }

  render() {
    return (
      <React.Fragment>
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
          <p>Use 'test@test.com' as the E-Mail and 'test123' as Password</p>
          <p>
            <b>LogOut after use to prevent spam tokens!</b>
          </p>
          <p>New User Registration is currently Disabled.</p>
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
