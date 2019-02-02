import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';

import classes from './UserNavLinks.module.css';

class UserNavLinks extends React.Component {
  logoutHandler = () => {
    const cookies = new Cookies();
    const xAuth = cookies.get('x-auth');
    axios
      .delete('https://neflickbackendtest.herokuapp.com/users/logout', {
        headers: { 'x-auth': xAuth },
      })
      .then(response => {
        if (response.status === 200) {
          cookies.remove('x-auth');
        }
      })
      .then(() => {
        this.props.dispatch({
          type: 'VERIFIED',
          payload: 'false',
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={classes.UserNavLinks}
          style={{ display: this.props.display }}
        >
          <div>My Profile</div>
          <div>Account Settings</div>
          <div onClick={this.logoutHandler}>Log Out</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    verified: state.App.verified,
  };
};
export default connect(mapStateToProps)(UserNavLinks);
