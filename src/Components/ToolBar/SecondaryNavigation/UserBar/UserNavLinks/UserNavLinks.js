import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

import classes from './UserNavLinks.module.css';

class UserNavLinks extends React.Component {
  state = {
    loggedOut: false,
  };

  logoutHandler = () => {
    const cookies = new Cookies();
    const xAuth = cookies.get('x-auth');
    axios
      .delete('https://neflickbackendtest.herokuapp.com/users/logout', {
        headers: { 'x-auth': xAuth },
      })
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          cookies.remove('x-auth');
        }
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

export default UserNavLinks;
