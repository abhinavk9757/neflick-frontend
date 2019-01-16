import React from 'react';
import classes from './UserBar.module.css';

import userImg from '../../../../Assets/user-default.svg';
import UserNavLinks from './UserNavLinks/UserNavLinks';

class UserBar extends React.Component {
  state = {
    display: 'none',
  };

  toggleHandler = () => {
    const currState = this.state;
    if (currState.display === 'none') {
      currState.display = 'flex';
    } else {
      currState.display = 'none';
    }
    this.setState({ currState });
  };

  render() {
    return (
      <div className={classes.UserBar}>
        <img src={userImg} alt="user" onClick={this.toggleHandler} />
        <UserNavLinks display={this.state.display} />
        {/* <UserPhoto></UserPhoto>
        <UserNavigationLinks></UserNavigationLinks> */}
      </div>
    );
  }
}

export default UserBar;
