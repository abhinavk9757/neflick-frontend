import React from 'react';
import classes from './UserNavLinks.module.css';

const userNavLinks = props => {
  return (
    <div className={classes.UserNavLinks} style={{ display: props.display }}>
      <div>My Profile</div>
      <div>Account Settings</div>
      <div>Log Out</div>
    </div>
  );
};

export default userNavLinks;
