import React from 'react';
import classes from './PrimaryNavigation.module.css';

const primaryNavigation = () => {
  return (
    <div className={classes.PrimaryNavigation}>
      <div className={classes.DesktopOnly}>
        <a href="/">Home</a>
        <a href="/">Series</a>
        <a href="/">Film</a>
        <a href="/">Recently Added</a>
        <a href="/">My List</a>
      </div>
    </div>
  );
};

export default primaryNavigation;
