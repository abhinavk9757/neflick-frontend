import React from 'react';
import classes from './SecondaryNavigation.module.css';

import SearchBar from './SearchBar/SearchBar';
import UserBar from './UserBar/UserBar';

const secondaryNavigation = () => {
  return (
    <div className={classes.SecondaryNavigation}>
      <SearchBar />
      <UserBar />
    </div>
  );
};

export default secondaryNavigation;
