import React from 'react';
import classes from './SearchBar.module.css';
import searchIcon from '../../../../Assets/searchIcon.svg';

const searchBar = () => {
  return (
    <div className={classes.SearchBar}>
      <img src={searchIcon} alt="searchIcon" className={classes.SearchIcon} />
      <input
        type="text"
        className={classes.InputText}
        placeholder="Titles, peoples, genres"
      />
    </div>
  );
};

export default searchBar;
